import { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import { socket } from "../socket";

const CodeEditor = ({roomId}) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");

  const [isReceived,setIsRecieved] = useState(false)

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  useEffect(()=>{
    console.log(isReceived)
    if (!isReceived){
      console.log(value)

      socket.emit('send', {msg: value, roomId})
    }
  }, [value])
  
  useEffect(()=>{
    socket.on("receive",(data) => {
      setIsRecieved(true)
      console.log('yeee')
      console.log(data)
      setValue(data.msg)
    })



    return ()=> {
      socket.off('receive')
    }
  } , [])

  function handleInputChange(value){
    setIsRecieved(false)
    setValue(value);
    
  }

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="100vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => handleInputChange(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;