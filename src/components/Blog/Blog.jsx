import React from 'react';

const Blog = () => {
  return (
    <div>
      <section class="mt-8 mb-8 w-[50%] mx-auto">
        <h1 class="text-3xl font-bold text-center mb-8 underline">Few Question Answer</h1>
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-orange-400 rounded-box ">
          <div class="collapse-title text-xl font-medium">When Should you use context API</div>
          <div class="collapse-content bg-rose-300">
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-yellow-400	rounded-box ">
          <div class="collapse-title text-xl font-medium">What is custom hook?</div>
          <div class="collapse-content bg-lime-200	">
            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem</p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-red-400 rounded-box ">
          <div class="collapse-title text-xl font-medium">What is useRef? Why we use this ?</div>
          <div class="collapse-content bg-red-50">
            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current </p>
          </div>
        </div>
        <div tabindex="0" class="collapse collapse-arrow border border-base-300  rounded-box ">
          <div class="collapse-title text-xl font-medium">  What is useMemo? Why we use this ?</div>
          <div class="collapse-content bg-orange-200">
            <p>useMemo is a React hook that allows us to memoize expensive computations and avoid unnecessary re-renders of components. It takes a function and an array of dependencies as arguments, and returns the previously computed value if the dependencies haven't changed. The main use case for useMemo is to improve the performance of our application by reducing the amount of work that needs to be done during rendering.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;