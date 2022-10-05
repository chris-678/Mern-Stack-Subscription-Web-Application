import express from "express"
import User from "./models/user";
import Article from "./models/article";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe"


const router = express.Router();

router.get("/prices", checkAuth, async (req, res) => {
    const prices = await stripe.prices.list({
        apiKey: process.env.STRIPE_SECRET_KEY,
    });

    return res.json(prices);
});

router.post("/session", checkAuth, async (req, res) => {
    const user = await User.findOne({ email: req.user });

    // Article.create({
    //     title: "The Art Of Atomic Improvements",
    //     imageUrl: "https://images.pexels.com/photos/5691866/pexels-photo-5691866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     content: "Phasellus sit amet ullamcorper ipsum. Nulla iaculis purus eu tempor mattis. Ut sit amet lorem posuere, mollis arcu at, fermentum enim. Pellentesque id risus eget nisl porta rutrum id a libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ipsum eu tortor rutrum bibendum. Nullam interdum eleifend varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sed neque sit amet purus finibus cursus sit amet sit amet elit. Fusce sem eros, dignissim in pharetra eu, auctor eget ipsum. Pellentesque imperdiet vulputate diam sed scelerisque. Vivamus imperdiet semper enim, non tristique arcu.",
    //     access: "Premium",
    // });

    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
            {
                price: req.body.priceId,
                quantity: 1,
            },
        ],
        success_url: "http://localhost:3000/articles",
        cancel_url: "http://localhost:3000/article-plans",
        customer: user.stripeCustomerId,
    },
        {
            apiKey: process.env.STRIPE_SECRET_KEY,
        });

    return res.json(session);
});


export default router