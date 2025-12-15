import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  linkText: string;
  anchor: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}