import axios from "axios";

const API_URL = "https://sxomfgqewgqtmnojvogs.supabase.co/rest/v1/users";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4b21mZ3Fld2dxdG1ub2p2b2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMTc4OTQsImV4cCI6MjA5Njg5Mzg5NH0.ZAUPh_14juMMT_HpcTN5VGkkmJ1ARxCEfmdwgyKXqhQ";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const usersAPI = {
  // GET
  async getUsers() {
    const response = await axios.get(API_URL, {
      headers,
    });

    return response.data;
  },

  // POST
  async createUser(data) {
    const response = await axios.post(API_URL, data, { headers });

    return response.data;
  },

  // PUT
  async updateUser(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });

    return response.data;
  },

  // DELETE
  async deleteUser(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });

    return response.data;
  },

  async findByEmail(email) {
    const response = await axios.get(`${API_URL}?email=eq.${email}`, {
      headers,
    });

    return response.data;
  },

  // LOGIN
  async login(email, password) {
    const response = await axios.get(
      `${API_URL}?email=eq.${email}&password=eq.${password}`,
      { headers },
    );

    return response.data;
  },
};
