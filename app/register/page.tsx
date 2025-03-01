"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload, Link, User, Mail, Phone, School, Sparkles, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Change based on your folder structure

const page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    pptLink: "",
    pptFile: null as File | null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, pptFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const nextStep = () => currentStep < totalSteps && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const renderStepIndicator = () => (
    <div className="flex justify-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 rounded-full ${
            index + 1 === currentStep ? "bg-purple-500 w-8" : "bg-purple-900 w-6"
          }`}
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: index + 1 === currentStep ? 1 : 0.7,
            width: index + 1 === currentStep ? 32 : 24,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md w-full space-y-8 bg-black bg-opacity-60 p-10 rounded-2xl backdrop-blur-xl shadow-lg border border-purple-900/50 relative"
      >
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg"
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div>
        </div>

        <h2 className="text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Register for the Future
        </h2>
        <p className="text-center text-sm text-purple-300">Join us in shaping the world with AI and ML</p>

        {renderStepIndicator()}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <InputField
                icon={<User />}
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                icon={<Mail />}
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <InputField
                icon={<Phone />}
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <InputField
                icon={<School />}
                label="College Name"
                name="college"
                value={formData.college}
                onChange={handleInputChange}
              />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <InputField
                icon={<Link />}
                label="Presentation Link (Optional)"
                name="pptLink"
                type="url"
                value={formData.pptLink}
                onChange={handleInputChange}
              />
              <FileField
                icon={<Upload />}
                label="Upload Presentation"
                name="pptFile"
                onChange={handleFileChange}
              />
            </motion.div>
          )}

          <div className="flex justify-between">
            {currentStep > 1 && <Button onClick={prevStep}>Back</Button>}
            {currentStep < totalSteps ? (
              <Button onClick={nextStep}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
            ) : (
              <Button type="submit">Register</Button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({ icon, label, name, value, type = "text", onChange }: any) => (
  <div>
    <label className="text-purple-300">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-3">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="pl-10 p-3 w-full bg-black border-purple-700 rounded-lg text-white"
      />
    </div>
  </div>
);

const FileField = ({ icon, label, name, onChange }: any) => (
  <div>
    <label className="text-purple-300">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-3">{icon}</div>
      <input
        type="file"
        name={name}
        accept=".ppt,.pptx,.pdf"
        onChange={onChange}
        className="pl-10 p-3 w-full bg-black border-purple-700 rounded-lg text-white"
      />
    </div>
  </div>
);

export default page;
