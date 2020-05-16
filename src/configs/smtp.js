import { env } from "../library/helper";

const config = {
  ethereal: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'trevor96@ethereal.email',
      pass: 'bYctqz65JRMe3cD22y',
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  gmail: {
    service: 'gmail',
    auth: {
      user: 'peterrueca@gmail.com',
      pass: 'googlekeyw0rd',
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
};

export default config[env('SMTP', 'ethereal')];
