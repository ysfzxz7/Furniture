import { IoMdSearch } from "react-icons/io";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="font-bold mb-2">all product</h1>
        <Link
          className="bg-green-600 rounded text-white  h-fit px-2 pb-[3px]"
          to={"/"}
        >
          Confirm Order
        </Link>
      </div>
      <div className="bg-white rounded shadow pt-4">
        <div className="flex items-center justify-between w-full ">
          <div className=" flex justify-between items-center  w-full">
            {/**Search input */}
            <div className="flex relative w-[30%] mx-4  ">
              <input
                type="text"
                className="w-full py-1 px-3 border border-gray-300 rounded-sm bg-white text-gray-700 focus:outline-none focus:ring-1 text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="search"
              />
              <IoMdSearch className="absolute right-2 mt-2 " />
            </div>
            {/**select to get categories */}
            <form className="max-w-sm flex gap-4 mx-4 w-full">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:ring-1 focus:border-blue-500 block w-full p-1 "
              >
                <option key={"all"}>Categories</option>
                {["fur", "electro", "cables"].map((category: string) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {/** select to get the status */}
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 focus:ring-1 block w-full p-1 "
              >
                <option>Stock Status</option>
                <option value="US">In stock</option>
                <option value="CA">Low Stock</option>
                <option value="DE">Out Of stock</option>
              </select>
            </form>
          </div>
        </div>
        <div className=" grid grid-cols-6 bg-gray-200 gap-4 p-4 mt-4">
          {prod.map((pro) => (
            <div className="flex items-center bg-white justify-start rounded shadow">
              <ProductCard product={pro} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type product = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minLevel: number;
  supplier: string;
  sku: string;
  location: string;
  status: string;
  dateAdded: string;
  lastUpdated: string;
  addedBy: string;
  description: string;
};
const prod: product[] = [
  {
    id: "PRD-001",
    name: "Wireless Mouse",
    category: "Electronics",
    quantity: 150,
    minLevel: 10,
    supplier: "Tech Supplies Inc.",
    sku: "WM-2025-001",
    location: "Aisle 3 - Shelf B",
    status: "In Stock",
    dateAdded: "2025-09-03T10:00:00Z",
    lastUpdated: "2025-09-02T15:30:00Z",
    addedBy: "Lee Johnson",
    description:
      "Ergonomic wireless mouse with adjustable DPI and USB receiver.",
  },
  {
    id: "PRD-002",
    name: "Mechanical Keyboard",
    category: "Electronics",
    quantity: 85,
    minLevel: 15,
    supplier: "KeyTech Co.",
    sku: "MK-2025-002",
    location: "Aisle 2 - Shelf D",
    status: "In Stock",
    dateAdded: "2025-08-15T11:20:00Z",
    lastUpdated: "2025-08-20T09:45:00Z",
    addedBy: "Anna Smith",
    description:
      "RGB backlit mechanical keyboard with blue switches and USB-C connectivity.",
  },
  {
    id: "PRD-003",
    name: "27-inch 4K Monitor",
    category: "Electronics",
    quantity: 45,
    minLevel: 5,
    supplier: "VisionTech Ltd.",
    sku: "MN-2025-003",
    location: "Aisle 5 - Shelf A",
    status: "Out of Stock",
    dateAdded: "2025-07-30T14:10:00Z",
    lastUpdated: "2025-08-01T16:00:00Z",
    addedBy: "Mark Peterson",
    description: "Ultra HD 4K monitor with HDR support and adjustable stand.",
  },
  {
    id: "PRD-004",
    name: "USB-C Hub",
    category: "Accessories",
    quantity: 200,
    minLevel: 20,
    supplier: "GigaConnect",
    sku: "HUB-2025-004",
    location: "Aisle 1 - Shelf E",
    status: "Out of Stock",
    dateAdded: "2025-09-01T08:45:00Z",
    lastUpdated: "2025-09-02T12:15:00Z",
    addedBy: "Sarah Lee",
    description:
      "Multiport USB-C hub with HDMI, USB 3.0, SD card, and Ethernet ports.",
  },
  {
    id: "PRD-005",
    name: "External SSD 1TB",
    category: "Storage",
    quantity: 60,
    minLevel: 10,
    supplier: "DataDrive Corp.",
    sku: "SSD-2025-005",
    location: "Aisle 4 - Shelf C",
    status: "In Stock",
    dateAdded: "2025-08-10T13:30:00Z",
    lastUpdated: "2025-08-15T10:50:00Z",
    addedBy: "James Carter",
    description:
      "High-speed portable 1TB SSD with USB 3.2 interface and shock-resistant casing.",
  },
  {
    id: "PRD-006",
    name: "Gaming Headset",
    category: "Electronics",
    quantity: 120,
    minLevel: 25,
    supplier: "SoundWave Inc.",
    sku: "GH-2025-006",
    location: "Aisle 3 - Shelf D",
    status: "In Stock",
    dateAdded: "2025-09-05T09:10:00Z",
    lastUpdated: "2025-09-06T14:25:00Z",
    addedBy: "Linda Brown",
    description:
      "Surround sound gaming headset with detachable microphone and RGB lighting.",
  },
  {
    id: "PRD-007",
    name: "Bluetooth Speaker",
    category: "Audio",
    quantity: 90,
    minLevel: 15,
    supplier: "AudioMax",
    sku: "BS-2025-007",
    location: "Aisle 2 - Shelf B",
    status: "In Stock",
    dateAdded: "2025-08-20T15:40:00Z",
    lastUpdated: "2025-08-22T17:00:00Z",
    addedBy: "Peter Wilson",
    description:
      "Portable waterproof Bluetooth speaker with deep bass and 12-hour battery life.",
  },
  {
    id: "PRD-008",
    name: "Smartphone Stand",
    category: "Accessories",
    quantity: 300,
    minLevel: 30,
    supplier: "FlexiHold",
    sku: "SS-2025-008",
    location: "Aisle 1 - Shelf C",
    status: "In Stock",
    dateAdded: "2025-07-25T10:15:00Z",
    lastUpdated: "2025-07-28T09:30:00Z",
    addedBy: "Nancy Adams",
    description:
      "Adjustable smartphone stand compatible with most devices, foldable and lightweight.",
  },
  {
    id: "PRD-009",
    name: "Wireless Charger",
    category: "Accessories",
    quantity: 180,
    minLevel: 20,
    supplier: "ChargeX",
    sku: "WC-2025-009",
    location: "Aisle 2 - Shelf E",
    status: "In Stock",
    dateAdded: "2025-09-04T12:20:00Z",
    lastUpdated: "2025-09-06T08:40:00Z",
    addedBy: "Sam Johnson",
    description:
      "Fast wireless charging pad compatible with Qi-enabled devices up to 15W.",
  },
  {
    id: "PRD-010",
    name: "Laptop Cooling Pad",
    category: "Accessories",
    quantity: 70,
    minLevel: 12,
    supplier: "CoolTech",
    sku: "LCP-2025-010",
    location: "Aisle 4 - Shelf B",
    status: "Low Stock",
    dateAdded: "2025-08-05T11:00:00Z",
    lastUpdated: "2025-08-07T13:50:00Z",
    addedBy: "Robert White",
    description:
      "Laptop cooling pad with dual fans and adjustable height for better airflow.",
  },
  {
    id: "PRD-011",
    name: "Action Camera",
    category: "Cameras",
    quantity: 40,
    minLevel: 5,
    supplier: "GoVision",
    sku: "AC-2025-011",
    location: "Aisle 6 - Shelf A",
    status: "In Stock",
    dateAdded: "2025-09-02T10:30:00Z",
    lastUpdated: "2025-09-03T14:10:00Z",
    addedBy: "Olivia Harris",
    description:
      "4K waterproof action camera with image stabilization and wide-angle lens.",
  },
  {
    id: "PRD-012",
    name: "Smartwatch",
    category: "Wearables",
    quantity: 95,
    minLevel: 10,
    supplier: "TimeTech",
    sku: "SW-2025-012",
    location: "Aisle 5 - Shelf D",
    status: "Low Stock",
    dateAdded: "2025-08-25T09:00:00Z",
    lastUpdated: "2025-08-28T11:35:00Z",
    addedBy: "William Scott",
    description:
      "Fitness smartwatch with heart rate monitoring, GPS, and AMOLED display.",
  },
  {
    id: "PRD-013",
    name: "HDMI Cable 2m",
    category: "Cables",
    quantity: 250,
    minLevel: 50,
    supplier: "CablePro",
    sku: "HC-2025-013",
    location: "Aisle 7 - Shelf C",
    status: "In Stock",
    dateAdded: "2025-07-18T13:25:00Z",
    lastUpdated: "2025-07-20T15:40:00Z",
    addedBy: "Emma Watson",
    description:
      "High-speed HDMI cable supporting 8K resolution and 120Hz refresh rate.",
  },
  {
    id: "PRD-014",
    name: "Portable Power Bank",
    category: "Power",
    quantity: 140,
    minLevel: 25,
    supplier: "PowerMax",
    sku: "PB-2025-014",
    location: "Aisle 8 - Shelf B",
    status: "Low Stock",
    dateAdded: "2025-09-06T14:50:00Z",
    lastUpdated: "2025-09-07T16:30:00Z",
    addedBy: "Sophia Miller",
    description:
      "20,000mAh portable power bank with fast charging and dual USB outputs.",
  },
  {
    id: "PRD-015",
    name: "Laser Printer",
    category: "Office Equipment",
    quantity: 35,
    minLevel: 5,
    supplier: "PrintX Solutions",
    sku: "LP-2025-015",
    location: "Aisle 9 - Shelf A",
    status: "In Stock",
    dateAdded: "2025-08-12T10:15:00Z",
    lastUpdated: "2025-08-16T13:40:00Z",
    addedBy: "Daniel Green",
    description:
      "High-speed monochrome laser printer with wireless connectivity and duplex printing.",
  },
];
export default Catalogue;
