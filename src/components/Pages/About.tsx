import React from "react";

export const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-2xl mx-auto px-4  bg-white-200">
        <div className="grid grid-cols-1 gap-5">
          <div>
            <h2 className="text-xl font-bold mb-2">Introduction:</h2>
            <p>
              This project aims to develop an alternative to the presently used forms of user manuals for any device. This is an engaging, interactive, and potentially more effective approach to the user manuals. To demonstrate this point, we have chosen to work with a camera and build a user manual around it. The interface will help to explore various features and functionalities of the camera virtually. We will be using 3-d model of camera to provide the user with better understanding and visualisation. This will not only help the existing and new users of the device understand its working, but also aid potential buyers better understand the product.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-2">Motivation:</h2>
            <p>
              Traditional product manuals, can be difficult to understand. They are very text heavy and static. This leads to confusion, improper use, or even damage to products. Very Recently we have seen multiple cases of people being unable to interpret user manuals of various devices correctly, or be completely uninterested in reading a long text document. This led us to our problem statement, where we are making an interactive and visually pleasing alternative to the user manuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};