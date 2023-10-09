import {
  Box,
  Button,
  Container,
  Divider,
  FormLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import loginimg from "../src/assets/loginhero.png";
import bottomImg from "../src/assets/loginbottom.png";
import { GoogleSvg, FacebookSvg } from "../src/assets/google.svg.jsx";
import "./loginpage.css";
const LoginPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { md: "center", sm: "stretch" },
        bgcolor: "neutral.main",
      }}
    >
      <Box
        sx={{
          height: { lg: "95.5vh", md: "95vh", sm: "94.7vh", xs: "100vh" },
          width: { xs: "100vw", sm: "100vw", md: "90vw", lg: "60vw" },
          m: { sm: 2, md: 2 },
          p: 3,
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container sx={{justifyContent:"center"}}>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={6}>
            <Box
              className="loginBackGround"
              sx={{
                width: "90%",
                height: "98%",
                borderRadius: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                alignItemsCenter: "center",
              }}
            >
              <Box sx={{ px: 5 }}>
                <Box sx={{ pt: 12, mt: 2, ml: 4 }}>
                  <img src={loginimg} width={"80%"} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: "neutral.main", mt: 4, fontWeight: "700", }}
                >
                  Welcome Back!
                </Typography>
                <Typography
                  sx={{ mt: 1 }}
                  variant="caption"
                  color="neutral.main"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nulla amet ullam beatae tenetur recusandae suscipit
                  eius repellat et.
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={bottomImg}
                  style={{ filter: "contrast(8%)" }}
                  alt="login"
                  width="96%"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}  xs={10}>
            <Box
              sx={{
                p: { lg: 8, md: 8, sm: 2, xs: 1 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Sign In
              </Typography>
              <Box sx={{ mt: 5 }}>
                <form>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <FormLabel
                      type="email"
                      sx={{ color: "black", fontSize: 13, fontWeight: 550, mb:1 }}
                    >
                      Email
                    </FormLabel>
                    <TextField
                      size="small"
                      label="Example@email.com"
                      type="email"
                    />
                    <FormLabel
                      sx={{
                        color: "black",
                        fontSize: 13,
                        fontWeight: 550,
                        mt: 3,
                        mb:1
                      }}
                      placeholder="Password"
                    >
                      Password
                    </FormLabel>
                    <TextField size="small" label="at least 8 characters" />
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: "auto", mt: 1 }}
                      color="grey"
                    >
                      Forgot Password?
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        sx={{
                          fontSize: 15,
                          textTransform: "capitalize",
                          bgcolor: "secondary.main",
                          ":hover": { bgcolor: "secondary.dark" },
                          width: "100%",
                        }}
                        variant="contained"
                      >
                        Sign In
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
              <Divider sx={{ mt: 5 }}>
                <Typography variant="caption">Or</Typography>
              </Divider>
              <Box sx={{ mt: 2 }}>
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "stretch",
                    fontSize: 13,
                    textTransform: "capitalize",
                    width: "100%",
                    bgcolor: "neutral.main",
                    color: "black",
                    borderRadius: "4px",
                  }}
                  startIcon={<GoogleSvg />}
                >
                  Sign In with Google
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "stretch",
                    fontSize: 13,
                    textTransform: "capitalize",
                    width: "100%",
                    bgcolor: "neutral.main",
                    color: "black",
                    borderRadius: "4px",
                    "&.MuiButton-root": {
                      pl: 3,
                    },
                  }}
                  startIcon={<FacebookSvg />}
                >
                  Sign In with Facebook
                </Button>
              </Box>
              <Box sx={{ justifyContent: "center", display: "flex", mt: 3 }}>
                <Typography variant="caption">
                  Don&apos;t you have an account?
                  <Link sx={{ textDecoration: "none", ml: 0.5 }} href="">
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
