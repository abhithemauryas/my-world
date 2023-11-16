const {OrderModel}=require("../models/Order.Model");
const {CreatePaymentDetails}=require("./Payment.Controller");
const {CreateAddress}=require("./Address.Cotroller");

const CreateOrder=async(req,res)=>{
    try {
        const data=req.body;
        const address=await CreateAddress(req.body.addressDetails[0]);
        const Paymentdetails=await CreatePaymentDetails(req.body.Paymentdetails);
        const AddressId=address._id;
        const PaymentId=Paymentdetails._id;
        const UserID=req.body.UserId;
        const products=req.body.products;
        const OrderData={
            products,UserID,PaymentId,AddressId
        }
        const saveOrder=new OrderModel(OrderData);
        await saveOrder.save();
        res.status(200).send({"msg":"order has been placed"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

module.exports={
    CreateOrder
}