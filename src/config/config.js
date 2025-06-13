const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 7234,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'pk_test_51RYs17FPUDgPTeILRTXneGtOxy6xUJULW1VmbjHMi7qNm1FLQDFC4CBuqL5da3yWNSDUmh9zIGJqeLAGbIFFJmyp000IMZk3OU',
  stripe_test_secret_key: 'sk_test_51RYs17FPUDgPTeILzHIwfKH4uwhOfW4lAJ1v05h49SzuAmK8PeySM55r7o1BFs6udBZ9mpVSMFRCTsBFAPTIFvYk00oMNYMhVi',
  stripe_test_api_key: 'pk_test_51RYs17FPUDgPTeILRTXneGtOxy6xUJULW1VmbjHMi7qNm1FLQDFC4CBuqL5da3yWNSDUmh9zIGJqeLAGbIFFJmyp000IMZk3OU' 
}

export default config
