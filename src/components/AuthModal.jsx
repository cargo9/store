import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  TabContainer,
  Tab,
  Form,
  Input,
  Button,
  ErrorMessage,
  Divider,
  GoogleButton,
} from "./AuthModal.styled";

export const AuthModal = () => {
  const { closeAuthModal, register, login, loginWithGoogle } = useAuth();
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(loginData.usernameOrEmail, loginData.password);
      closeAuthModal();
      setLoginData({ usernameOrEmail: "", password: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!registerData.username || !registerData.email || !registerData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      await register(registerData.username, registerData.email, registerData.password);
      closeAuthModal();
      setRegisterData({ username: "", email: "", password: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // This will be implemented with Google OAuth
    // For now, show a placeholder
    alert("Google login will be implemented with OAuth. For now, please use regular registration.");
  };

  return (
    <ModalOverlay onClick={closeAuthModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Welcome</h2>
          <CloseButton onClick={closeAuthModal}>&times;</CloseButton>
        </ModalHeader>

        <TabContainer>
          <Tab
            active={activeTab === "login"}
            onClick={() => {
              setActiveTab("login");
              setError("");
            }}
          >
            Login
          </Tab>
          <Tab
            active={activeTab === "register"}
            onClick={() => {
              setActiveTab("register");
              setError("");
            }}
          >
            Register
          </Tab>
        </TabContainer>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {activeTab === "login" ? (
          <Form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Username or Email"
              value={loginData.usernameOrEmail}
              onChange={(e) =>
                setLoginData({ ...loginData, usernameOrEmail: e.target.value })
              }
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>

            <Divider>or</Divider>

            <GoogleButton type="button" onClick={handleGoogleLogin} disabled={loading}>
              <span>🔍</span> Continue with Google
            </GoogleButton>
          </Form>
        ) : (
          <Form onSubmit={handleRegister}>
            <Input
              type="text"
              placeholder="Username"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
              required
              disabled={loading}
            />
            <Input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Password (min 6 characters)"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Register"}
            </Button>

            <Divider>or</Divider>

            <GoogleButton type="button" onClick={handleGoogleLogin} disabled={loading}>
              <span>🔍</span> Continue with Google
            </GoogleButton>
          </Form>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
