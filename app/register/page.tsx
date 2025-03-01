"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Link, User, Mail, Phone, School, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const RegisterPage: React.FC = () => {
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
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, pptFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You would typically send this data to your backend
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center space-x-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full ${
              index + 1 === currentStep
                ? "bg-purple-500 w-8"
                : index + 1 < currentStep
                ? "bg-purple-400 w-6"
                : "bg-purple-900 w-6"
            }`}
            initial={{ opacity: 0.5 }}
            animate={{ 
              opacity: index + 1 === currentStep ? 1 : 0.7,
              width: index + 1 === currentStep ? 32 : 24
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/3 bottom-1/3 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md w-full space-y-8 bg-black bg-opacity-60 p-10 rounded-2xl backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.2)] border border-purple-900/50 relative z-10"
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

        <div>
          <motion.h2 
            className="mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Register for the Future
          </motion.h2>
          <motion.p 
            className="mt-2 text-center text-sm text-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join us in shaping the world with AI and ML
          </motion.p>
        </div>

        {renderStepIndicator()}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h3 className="text-xl font-medium text-purple-300 mb-4">Personal Information</h3>
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-purple-700 placeholder-purple-500 text-white bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-purple-700 placeholder-purple-500 text-white bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h3 className="text-xl font-medium text-purple-300 mb-4">Contact Details</h3>
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-purple-300 mb-1 ml-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-purple-700 placeholder-purple-500 text-white bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="college" className="block text-sm font-medium text-purple-300 mb-1 ml-1">
                  College Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <School className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    id="college"
                    name="college"
                    type="text"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-purple-700 placeholder-purple-500 text-white bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                    placeholder="Enter your college name"
                    value={formData.college}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h3 className="text-xl font-medium text-purple-300 mb-4">Presentation Details</h3>
              <div className="group">
                <label htmlFor="pptLink" className="block text-sm font-medium text-purple-300 mb-1 ml-1">
                  Presentation Link (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Link className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    id="pptLink"
                    name="pptLink"
                    type="url"
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-purple-700 placeholder-purple-500 text-white bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 sm:text-sm"
                    placeholder="Google Drive or OneDrive link"
                    value={formData.pptLink}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="pptFile" className="block text-sm font-medium text-purple-300 mb-1 ml-1">
                  Upload Presentation
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Upload className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    id="pptFile"
                    name="pptFile"
                    type="file"
                    accept=".ppt,.pptx,.pdf"
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-purple-700 placeholder-purple-500 text-white bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </div>
                <p className="text-xs text-purple-400 mt-1 ml-1">Accepted formats: .ppt, .pptx, .pdf (Max 10MB)</p>
              </div>
            </motion.div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-900/30"
              >
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg shadow-purple-500/20"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg shadow-purple-500/20"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1
                  }}
                  className="absolute left-0 inset-y-0 flex items-center pl-3"
                >
                  <Sparkles className="h-5 w-5 text-purple-300" />
                </motion.span>
                Register
              </Button>
            )}
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-purple-400">
            By registering, you agree to our{" "}
            <a href="#" className="text-purple-300 hover:text-purple-200 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-300 hover:text-purple-200 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;