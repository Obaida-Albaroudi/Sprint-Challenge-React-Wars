import React from "react";
import styled from "styled-components";

//Styled the content for each individual here.

//Card is meant to look like button but not be clickable. The desin fit nicely here with button versus something like div.
export const Card = styled.button`
  padding: 5%;
  margin: 5%;
  border: none;
  border-radius: 5%;
  color: black;
  `;

//Over here I just wanted to to be able to mess with the content specifically separate from the h1 tag.
export const Content = styled.p`
  font-size: 1.3rem;
`;