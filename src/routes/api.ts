import UserController from '../controllers/userController';
import express from 'express';
const router = express.Router();

router.get('/ping', (req, res) => {
   res.send('Pong!');
 });

 
router.get('/test', UserController.store);
// router.get('/send-mail', async function (req, res) {
//   try {
//     await mail.send('route Subject', '<p>dfd<p>', 'This is rout text');
//     return res.send('mail send successfully');
//   }
//   catch (error) {
//     errorHandling.mailErrorHandle(error);
//     return res.send('mail sending failed');
//   }
// })

// router.get('/type-check', UserController.checkType)
// router.get('/get-object', TestController.getObject)
// router.get('/get-string', TestController.getString)
// router.get('/get-null', TestController.getNull)
// router.get('/specific-field', TestController.specificField)
// router.get('/validation-test', [validator.testRequest], TestController.validationTest)
// router.post('/add-transaction', TestController.testTransactions)

// router.post('/store-book', BookController.storeBook)
// router.get('/read-name', BookController.readName)

// router.get('/redis-test-key', RedisTestController.testKey)
// router.get('/redis-test', RedisTestController.test)

// router.post('/add-category', CategoryController.storeCategory)
// router.post('/add-user', UserController.store)

// router.post('/login', [validator.loginRequest], AuthController.login)
// router.post('/auth-guarded', [adminAuth, test, validator.userRequest], AuthController.authGuarded)

// router.get('/storage-test', TestController.storageTest)
// router.get('/pdf-test', PdfController.pdfTest)

export default router;