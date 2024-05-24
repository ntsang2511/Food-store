// When the function in query return something, it will return the data when we query the name of the function in typeDefs
import {GraphQLScalarType, subscribe} from 'graphql'
import fakeData from "../fakeData/index.js";
import AuthorModel from "../models/AuthorModel.js";
import ProductModel from "../models/ProductModel.js";
import { PubSub } from 'graphql-subscriptions';
import NotificationModel from '../models/NotificationModel.js';

const pubsub = new PubSub();
export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.toISOString();
    },
  }),
  Query: {
    productsType: async (parent, args, context) => {
      const products = await ProductModel.find({
        authorId: context.uid,
      }).sort({
        updatedAt: 'desc',
      });
      console.log("products" + products);
      return products;
      //   return fakeData.productsType;
    },
    product: async (parent, args) => {
      const productId = args.productId;
      console.log("id" + productId);
      const foundProduct = await ProductModel.findOne({
        _id: productId,
      });
      return foundProduct;
    },
  },
  ProductType: {
    author: async (parent, args) => {
      const authorId = parent.authorId;
      const author = await AuthorModel.findOne({
        uid: authorId,
      });
      return author;
    },
  },
  Mutation: {
    deleteProduct: async (parent, args, context) => {
      const productId = args.productId;
      const foundProduct = await ProductModel.findByIdAndDelete(productId, args);
      // console.log("hi deleleelteltlelte"+foundProduct);
      // await foundProduct.deleteOne();
      return foundProduct;
    },
    addProduct: async (parent, args, context) => {
      const newProduct = new ProductModel({ ...args, authorId: context.uid });
      console.log(newProduct.description);
      pubsub.publish('PRODUCT_CREATED', {
        productCreated: {
          message: 'A new product has been created'
        }
      });
      await newProduct.save();
      return newProduct;
    },
    updateProduct: async (parent, args, context) => {
      const productId = args.id;
      const product = await ProductModel.findByIdAndUpdate(productId, args);
      return product;
    },
    register: async (parent, args) => {
      const foundUser = await AuthorModel.findOne({ uid: args.uid });
      if (!foundUser) {
        const newUser = new AuthorModel(args);
        await newUser.save();
        return newUser;
      }
      return foundUser;
    },
    pushNotifications: async (parent, args) => {
      const newNotification = new NotificationModel(args);
      pubsub.publish('PUSH_NOTIFICATION', {
        notification: {
          message: args.content,
        }
      });
      await newNotification.save();
      return { message: 'Successfully'};
    }
  },

  Subscription: {
    productCreated: {
      subscribe: () => pubsub.asyncIterator(['PRODUCT_CREATED']),
    },
    notification: {
      subscribe: () => pubsub.asyncIterator(['PUSH_NOTIFICATION'])
    }
  },
};
