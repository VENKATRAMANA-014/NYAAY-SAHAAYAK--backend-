

let express = require('express');
let mongoose = require('mongoose');
const multer=require('multer');
const cors=require('cors')
const bcrypt=require('bcrypt');
// let getFields=multer();

let app = express();
app.use(cors());
app.use(express.json());

let db = async() => {
    try{ 
    // await mongoose.connect('mongodb+srv://sontevenkatramana22:army2004@cluster0.n9p7atl.mongodb.net/NYAAYSAHAAYAK');
    await mongoose.connect('mongodb://localhost:27017/NYAAYSAHAAYAK');
    console.log('mongo db connected!');
    }
    catch(error) {
        console.log(error);
    }
}
db();

app.get('/',(req,res) => {  
    console.log(" A new request has been raised on  " + new Date(Date.now())); 
    res.writeHead(200,{ 'Content-Type':"text/plain"})  
    res.write('hello there...!');
    res.end();
});
// const userSchema = new mongoose.Schema({ 



//
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name:{
      type:String,
      required: true,
  }
});
  
const Users = new mongoose.model('User', userSchema);

app.get('/users',async (req,res) => {  
  console.log(" A new request has been raised on  " + new Date(Date.now()));  
  const users = await Users.find({});
  console.log(users);
  res.json(users);
  // res.end();
});


app.post('/login', async (request, response) => {
  const { email, password } = request.body;

  try {

    const user = await Users.findOne({ email });

    if (user) {
      // Compare hashed password
      //const isPasswordValid = await bcrypt.compare(password, user.password);

      if (password === user.password) {
        response.json({ success: true, message: 'Login successful' });
      } else {
        response.status(401).json({ success: false, message: 'Invalid  password' });
      }
    } else {
      response.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
});



app.post('/signup',async(request, response)=>{
  const { email, password,name } = request.body;
  try{
      const user = await Users.findOne({ email });
      if(user){
          response.status(401).json({ success: false, message: 'Error' });
      }else{
          const user=new Users({email,password,name});
          await user.save();
          response.send({ success: true, message: 'Login successful' });
      }
  }catch (error) {
      response.status(500).send(error.message);
    }
});

//

// demo

// const INFO = new mongoose.model("legalinfo", userSchema)

// app.get('/legalinfos',async (request,response) => { 
//     const allUsers = await INFO.find({});
//     try {
//       response.send(allUsers);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });











// laws faqs

const Q_As = new mongoose.Schema({question:String,answer:[String]});
const constSchema = new mongoose.Schema({
    constitutional_related_faqs:[Q_As],
});

const Laws = new mongoose.model("law", constSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await Laws.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});

const Q_A = new mongoose.Schema({question:String,answer:[String]});
const criminalSchema = new mongoose.Schema({
    criminal_related_faqs:[Q_A],
});

const Criminal = new mongoose.model("criminal", criminalSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await Criminal.find();
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});


const Q_A1 = new mongoose.Schema({question:String,answer:[String]});
const civilSchema = new mongoose.Schema({
  civil_related_faqs:[Q_A1],
});

const CIVIL = new mongoose.model("CIVIL", civilSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await CIVIL.find();
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});



const Q_A2 = new mongoose.Schema({question:String,answer:[String]});
const familySchema = new mongoose.Schema({
  family_related_faqs:[Q_A2],
});

const FAMILY = new mongoose.model("FAMILY", familySchema)

app.get('/laws',async (request,response) => { 
    const allconst = await FAMILY.find();
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});


const Q_As3 = new mongoose.Schema({question:String,answer:[String]});
const labourSchema = new mongoose.Schema({
  labour_related_faqs:[Q_As3],
});

const LABOUR = new mongoose.model("LABOUR", labourSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await LABOUR.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});




const Q_As4 = new mongoose.Schema({question:String,answer:[String]});
const ENVIRONMENTALSchema = new mongoose.Schema({
  environmental_related_faqs:[Q_As4],
});

const ENVIRONMENT = new mongoose.model("ENVIRONMENT", ENVIRONMENTALSchema)

app.get('/environmentals',async (request,response) => { 
    const allconst = await ENVIRONMENT.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});




// const Q_As4 = new mongoose.Schema({question:String,answer:[String]});
// const environmentalSchema = new mongoose.Schema({
//   environmental_related_faqs:[Q_As4],
// });

// const ENVIRONMENT = new mongoose.model("ENVIRONMENTAL", environmentalSchema)

// app.get('/laws',async (request,response) => { 
//     const allconst = await ENVIRONMENT.find({});
//     try {
//       response.send(allconst[0]);   
//     } catch (error) {       
//       response.status(500).send(error);
//     }
// });









const Q_As5 = new mongoose.Schema({question:String,answer:[String]});
const corporateSchema = new mongoose.Schema({
  corporate_related_faqs:[Q_As5],
});

const CORPORATE = new mongoose.model("CORPORATE", corporateSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await CORPORATE.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});



const Q_As6 = new mongoose.Schema({question:String,answer:[String]});
const intellectualSchema = new mongoose.Schema({
  intellectual_related_faqs:[Q_As6],
});

const INTELLECTUAL = new mongoose.model("INTELLECTUAL", intellectualSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await INTELLECTUAL.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});



const Q_As7 = new mongoose.Schema({question:String,answer:[String]});
const taxSchema = new mongoose.Schema({
  tax_related_faqs:[Q_As7],
});

const TAX = new mongoose.model("TAX", taxSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await TAX.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});





const Q_As8 = new mongoose.Schema({question:String,answer:[String]});
const cyberSchema = new mongoose.Schema({
  cyber_related_faqs:[Q_As8],
});

const CYBER = new mongoose.model("CYBER", cyberSchema)

app.get('/laws',async (request,response) => { 
    const allconst = await CYBER.find({});
    try {
      response.send(allconst[0]);   
    } catch (error) {       
      response.status(500).send(error);
    }
});




// consultation
const bodyParser = require('body-parser');

const Appointment = mongoose.model('Appointment', {
  name: String,
  phone: String,
  email: String,
  date: Date,
  time: String,
  area: String,
  city: String,
  state: String,
  postCode: String,
  advocate: String,
  contactMethod: String,
});

app.use(bodyParser.json());

app.post('/book-appointment', async (req, res) => {
  try {
    const appointmentData = req.body;
    const newAppointment = new Appointment(appointmentData);
    await newAppointment.save();
    res.status(201).json({ success: true, message: 'Appointment booked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});




// contact
const Contact = mongoose.model('Contact', {
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  feedback: String,
});

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  try {
    const { email, subject, feedback } = req.body;

    // Validate email and subject
    if (!email || !subject) {
      return res.status(400).json({ success: false, message: 'Email and Subject are required fields' });
    }

    const newContact = new Contact({ email, subject, feedback });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});



// cpc sections


// const sectionSchema = new mongoose.Schema({
//   section: Number,
//   title: String,
//   description: String,
// });

// const Section = mongoose.model('Section', sectionSchema);

// // API endpoint to fetch data
// app.get('/cpcs', async (req, res) => {
//   try {
//     const sections = await Section.find();
//     res.json(sections);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });




app.listen(5000, () => console.log("listening at port 5000"));














