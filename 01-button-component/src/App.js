import React from "react";

import Button from "./components/Button";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const App = () => {
  return (
    <div className="flex flex-col justify-between items-start gap-10">
      <div className="flex">
      <div className="flex flex-col items-baseline gap-5">
        <code className="text-gray-700 text-xs">&lt;Button color="name" /&gt;</code>
        <div className="flex md:flex-row flex-col md:gap-16 gap-5">
        <div className="text-center">
        <code className="text-gray-700 text-xs"><span className="text-[#3F3F3F] font-bold">default</span></code>
        <Button />
        </div>
        <div className="text-center">
          <code className="text-gray-700 text-xs"><span className="text-[#3D5AFE] font-bold">primary</span></code>
        <Button color="primary" /></div>
        <div className="text-center">
        <code className="text-gray-700 text-xs"><span className="text-[#1C313A] font-bold">secondary</span></code>
        <Button color="secondary" />
        </div>
        <div className="text-center">
        <code className="text-gray-700 text-xs"><span className="text-[#9A0007] font-bold">danger</span></code>
        <Button color="danger" />
        </div>

        </div>
      </div>
      </div>
      <hr className="border border-gray-200 w-full" />
     <div className="flex md:flex-row flex-col md:gap-20 gap-6">
      <div className="flex flex-col items-baseline gap-5">
      <code className="text-gray-700 text-xs">&lt;Button variant="default" /&gt;</code>
        <Button variant="default" />
        <Button variant="default" color="primary" />
        <Button variant="default" color="secondary" />
        <Button variant="default" color="danger" />
      </div>
      <div className="flex flex-col items-baseline gap-5">
      <code className="text-gray-700 text-xs">&lt;Button variant="outline" /&gt;</code>
        <Button variant="outline" />
        <Button variant="outline" color="primary" />
        <Button variant="outline" color="secondary" />
        <Button variant="outline" color="danger" />
      </div>
      <div className="flex flex-col items-baseline gap-5">
      <code className="text-gray-700 text-xs">&lt;Button variant="text" /&gt;</code>
        <Button variant="text" />
        <Button variant="text" color="primary" />
        <Button variant="text" color="secondary" />
        <Button variant="text" color="danger" />
      </div>
     </div>
     <hr className="border border-gray-200 w-full" />
      <div className="flex md:flex-row flex-col md:gap-20 gap-6">
      <div className="flex flex-col items-baseline gap-5">
      <code className="text-gray-700 text-xs">&lt;Button disable /&gt;</code>
        <Button disable />
        <Button color="primary" disable />
        <Button color="secondary" disable />
        <Button color="danger" disable />
      </div>
      <div className="flex flex-col justify-end items-baseline gap-5">
        <Button variant="outline" disable />
        <Button variant="outline" color="primary" disable />
        <Button variant="outline" color="secondary" disable />
        <Button variant="outline" color="danger" disable />
      </div>
      <div className="flex flex-col justify-end items-baseline gap-5">
        <Button variant="text" disable />
        <Button variant="text" color="primary" disable />
        <Button variant="text" color="secondary" disable />
        <Button variant="text" color="danger" disable />
      </div>

      <div className="flex items-baseline  flex-col gap-5">
      <code className="text-gray-700 text-xs">&lt;Button disableShadow /&gt;</code>
        <Button disableShadow />
        <Button color="primary" disableShadow />
        <Button color="secondary" disableShadow />
        <Button color="danger" disableShadow />
      </div>
      </div>
      <hr className="border border-gray-200 w-full" />
      <div className="flex items-baseline flex-col gap-5">
      <code className="text-gray-700 text-xs">&lt;Button size="<span className="text-sm font-bold">sm</span> or <span className="text-base font-bold">md</span> or <span className="text-lg font-bold">lg</span>" /&gt;</code>
        <div className="flex flex-row items-baseline gap-5">
        <Button color="primary" size="sm"/>
        <Button color="primary" size="md" />
        <Button color="primary" size="lg"/>
        </div>
      </div>
      <hr className="border border-gray-200 w-full" />
      <div className="flex items-baseline flex-col gap-5">
        <div className="flex md:flex-row flex-col items-baseline gap-16">
     <div className="flex flex-col gap-5 items-baseline text-center justify-center">
        <code className="text-gray-700 text-xs">&lt;Button <span className="font-bold">startIcon</span>="materialIcon"  /&gt;</code>
        <Button color="primary" startIcon={<AddShoppingCartIcon />}/>
     </div>
     <div className="flex flex-col gap-5 items-baseline text-center justify-center">
     <code className="text-gray-700 text-xs">&lt;Button <span className="font-bold">endIcon</span>="materialIcon" /&gt;</code>
        <Button color="primary" endIcon={<AddShoppingCartIcon/>}/>
     </div>
     <div className="flex flex-col gap-5 items-baseline text-center justify-center">
     <code className="text-gray-700 text-xs">&lt;Button startIcon="materialIcon" <span className="font-bold">onlyIcon</span> /&gt;</code>
        <Button color="primary" onlyIcon startIcon={<AddShoppingCartIcon/>}/>
     </div>
      
      
        </div>
      </div>
      <hr className="border border-gray-200 w-full" />

      <div className="flex items-baseline flex-col gap-5">
      <code className="text-gray-700 text-xs">&lt;Button <span className="font-bold">roundedFull</span> /&gt;</code>
        <div className="flex items-baseline flex-col gap-5">
        <Button color="primary" roundedFull/>
        </div>
      </div>

    </div>
  );
};

export default App;
