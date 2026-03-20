import React, {useEffect} from "react";
import { useFormik } from "formik";
import { Box, Button, Field, Heading, Input, Select, Textarea, VStack } from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {submit(values)},
    validationSchema: Yup.object({
        firstName: Yup
    .string()
    .trim()
    .required("Required"),
  email: Yup
    .string()
    .email("Invalid email address")
    .required("Required"),
    type: Yup
    .string(),
    comment: Yup
    .string()
    .min(25, "Must be at least 25 characters")
    .required("Required")
    }),
  });

useEffect(() => {
  if (response) {
    onOpen(response.type, response.message);
    if (response.type === "success") {
      formik.resetForm();
    }
  }
}, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <Field.Root isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <Field.Label htmlFor="firstName">Name</Field.Label>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <Field.ErrorText>{formik.errors.firstName}</Field.ErrorText>
              </Field.Root>
              <Field.Root isInvalid={formik.touched.email && formik.errors.email}>
                <Field.Label htmlFor="email">Email Address</Field.Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="type">Type of enquiry</Field.Label>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </Field.Root>
              <Field.Root isInvalid={formik.touched.comment && formik.errors.comment}>
                <Field.Label htmlFor="comment">Your message</Field.Label>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <Field.ErrorText>{formik.errors.comment}</Field.ErrorText>
              </Field.Root>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
