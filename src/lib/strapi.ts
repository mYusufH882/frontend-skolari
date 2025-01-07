import axios from 'axios';

const strapiAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBlogPosts = async () => {
  try {
    const response = await strapiAPI.get('/api/blog-posts?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getProducts = async () => {
  try {
    const response = await strapiAPI.get('/api/products?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getJobs = async () => {
  try {
    const response = await strapiAPI.get('/api/jobs?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await strapiAPI.get('/api/team-members?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
};

export const getTestimonials = async () => {
  try {
    const response = await strapiAPI.get('/api/testimonials?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

export const submitContactForm = async (formData: any) => {
  try {
    const response = await strapiAPI.post('/api/contact-submissions', {
      data: formData
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};