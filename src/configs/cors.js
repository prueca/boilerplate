let origin = ['http://localhost:8080'];

if (process.env.NODE_ENV === 'production') {
  origin = false;
}

export default {
  methods: 'GET, POST',
  credentials: true,
  origin,
};