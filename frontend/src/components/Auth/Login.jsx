import React, { useState } from "react";

import {
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputRightElement,
    InputGroup,
    Button,
} from "@chakra-ui/react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    function handleSubmit() {}

    return (
        <VStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter Your Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        pr="4.5rem"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter Your Password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            height="1.75rem"
                            size="sm"
                            onClick={() => {
                                setPasswordVisible(!passwordVisible);
                            }}
                        >
                            {passwordVisible ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme="whatsapp"
                width="100%"
                margin="30px !important"
                onClick={handleSubmit}
            >
                Login
            </Button>
        </VStack>
    );
}

export default Login;
