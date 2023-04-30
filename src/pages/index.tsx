import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  const [categoryName, setCategoryName] = useState<string>();
  const [saveEnabled, setSaveEnabled] = useState(false);

  // enable save button if ddl category selected
  useEffect(() => {
    if (categoryName) setSaveEnabled(true);
  }, [categoryName]);

  return (
    <div className="max-w-xl m-5 mx-auto">
      {/* Mandatory section */}
      <Select onValueChange={(value) => setCategoryName(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="money-baquet">Money Baquet</SelectItem>
            <SelectItem value="money-cake">Money Cake</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Separator className="my-4" />

      {/* Additional form section */}
      {categoryName == 'money-baquet' && (
        <>
          <h1 className="text-center">Money Baquet Form</h1>
          <div className="my-2"></div>
          <div className="my-2">
            <Input type="text" placeholder="Customer Name" />
          </div>
          <Separator className="my-4" />
        </>
      )}
      {categoryName == 'money-cake' && (
        <>
          <h1 className="text-center">Money Cake Form</h1>
          <div className="my-2">
            <Input type="text" placeholder="Customer Name" />
          </div>
          <div className="my-2">
            <Input type="number" placeholder="Price" />
          </div>
          <Separator className="my-4" />
        </>
      )}

      {/* Button section */}
      <Button className="w-full" variant="default" disabled={!saveEnabled}>
        Save
      </Button>
    </div>
  );
}
