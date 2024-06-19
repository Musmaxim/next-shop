import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LuSearch } from "react-icons/lu";

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <LuSearch size={26} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent>
        <input
          type="text"
          placeholder="поиск товаров"
          className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
