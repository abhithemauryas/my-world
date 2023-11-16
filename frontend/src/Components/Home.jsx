import React from "react";
import { Box } from "@mui/system";
import {  Grid } from "@mui/material";
import { Button } from "@mui/material";
import { GetData,SearchData} from "../Redux/Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardDiv from "./Card";
import Shorting from "./Shorting";
import SignInSide from "./Login";

const Home = ({toggle}) => {

  const Dispatch = useDispatch();
  const { Data } = useSelector((store) => store.productsFatch);
  const data = useSelector((store)=>store.LoginFatch)


  
  useEffect(() => {
    Dispatch(GetData());
  },[]);
  // useEffect(() => {
  //   console.log("search toggle",toggle)
  //   console.log("search toggle",Data)
  //   Dispatch(SearchData());
  // }, [toggle]);
  return (

    <>
    {data.isLogged == true?
    <Box>
      <Box mt={10}>
        <Shorting />
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", margin: "40px" }}
        >
          <Link style={{ textDecoration: "none" , color:"white"  }} to={`/category/jewelery`}>
            jewelery
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", margin: "40px" }}
        >
          <Link style={{ textDecoration: "none" , color:"white"  }} to={"/category/electronics"}>
            electronics
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", margin: "40px" }}
        >
          <Link
            style={{ textDecoration: "none" , color:"white"  }}
            to={"/category/women's clothing"}
          >
            women's clothing
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", margin: "40px" }}
        >
          <Link
            style={{ textDecoration: "none" , color:"white"  }}
            to={"/category/men's clothing"}
          >
            men's clothing
          </Link>
        </Button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {Data.map((e) => {
            return <CardDiv key={e._id} e={e}></CardDiv>;
          })}
        </Grid>
      </Box></Box>:
       <SignInSide/>
    }
      

    </>
  );
};

export default Home;
