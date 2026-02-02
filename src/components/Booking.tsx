// "use client";

// import React, { useState,useEffect } from "react";
//  import { useSearchParams } from "next/navigation";

// import {
//   Calendar,
//   Phone,
//   Mail,
//   CreditCard,
//   CheckCircle,
//   AlertCircle,
//   User,
//   Home,
//   Car,
//   X,
//   Plus,
//   Minus,
// } from "lucide-react";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   checkIn: string;
//   checkOut: string;
//   specialRequests: string;
//   paymentMethod: string;
// }

// interface CartItem {
//   id: string;
//   type: "apartment" | "car";
//   name: string;
//   price: number;
//   quantity: number;
//   capacity: number;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// export default function CheckoutBookingForm() {
//    const searchParams = useSearchParams();

//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     specialRequests: "",
//     paymentMethod: "",
//   });

//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const apartments = [
//     { id: "1", name: "Luxury Lekki Penthouse", price: 85000, capacity: 4 },
//     { id: "2", name: "Cozy Victoria Island Studio", price: 65000, capacity: 2 },
//     { id: "3", name: "Spacious Ikeja Apartment", price: 55000, capacity: 3 },
//     { id: "4", name: "Modern Ikoyi Heights", price: 95000, capacity: 5 },
//     { id: "5", name: "Charming Yaba Flat", price: 45000, capacity: 2 },
//     {
//       id: "6",
//       name: "Elegant Banana Island Villa",
//       price: 150000,
//       capacity: 6,
//     },
//     { id: "7", name: "Contemporary Surulere Space", price: 50000, capacity: 4 },
//     { id: "8", name: "Serene Ajah Getaway", price: 40000, capacity: 2 },
//   ];

//   const cars = [
//     { id: "1", name: "Toyota Camry 2023", price: 35000, capacity: 5 },
//     { id: "2", name: "Mercedes-Benz GLE", price: 85000, capacity: 7 },
//     { id: "3", name: "Honda Accord 2022", price: 30000, capacity: 5 },
//     { id: "4", name: "Range Rover Sport", price: 120000, capacity: 5 },
//     { id: "5", name: "Toyota Highlander", price: 65000, capacity: 8 },
//     { id: "6", name: "Lexus ES 350", price: 75000, capacity: 5 },
//   ];

//   const paymentMethods = [
//     { id: "card", name: "Credit/Debit Card", icon: CreditCard },
//     { id: "transfer", name: "Bank Transfer", icon: CreditCard },
//     { id: "cash", name: "Cash on Delivery", icon: CreditCard },
//   ];

//     useEffect(() => {
//     const type = searchParams.get("type") as "apartment" | "car" | null;
//     const id = searchParams.get("id");
//     const name = searchParams.get("name");
//     const price = searchParams.get("price");
//     const capacity = searchParams.get("capacity");

//     if (type && id && name && price && capacity) {
//       const parsedPrice = parseInt(price, 10);
//       const parsedCapacity = parseInt(capacity, 10);

//       // Validate parsed values
//       if (!isNaN(parsedPrice) && !isNaN(parsedCapacity)) {
//         setCart((prevCart) => {
//           // Check if item already exists in cart
//           const exists = prevCart.find(
//             (item) => item.id === id && item.type === type,
//           );
//           if (exists) {
//             return prevCart;
//           }

//           const newItem: CartItem = {
//             id,
//             type,
//             name,
//             price: parsedPrice,
//             quantity: 1,
//             capacity: parsedCapacity,
//           };

//           return [...prevCart, newItem];
//         });
//       }
//     }
//   }, [searchParams]);

//   const addToCart = (id: string, type: "apartment" | "car") => {
//     const items = type === "apartment" ? apartments : cars;
//     const item = items.find((i) => i.id === id);
//     if (!item) return;

//     const existingItem = cart.find((i) => i.id === id);
//     if (existingItem) {
//       setCart(
//         cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
//       );
//     } else {
//       setCart([
//         ...cart,
//         {
//           id,
//           type,
//           name: item.name,
//           price: item.price,
//           quantity: 1,
//           capacity: item.capacity,
//         },
//       ]);
//     }
//   };

//   const removeFromCart = (id: string) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: string, delta: number) => {
//     setCart(
//       cart.map((item) => {
//         if (item.id === id) {
//           const newQuantity = Math.max(1, item.quantity + delta);
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       }),
//     );
//   };

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[0-9]{11}$/.test(formData.phone.replace(/\s/g, ""))) {
//       newErrors.phone = "Phone number must be 11 digits";
//     }
//     if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
//     if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
//     if (
//       formData.checkIn &&
//       formData.checkOut &&
//       new Date(formData.checkIn) >= new Date(formData.checkOut)
//     ) {
//       newErrors.checkOut = "Check-out must be after check-in";
//     }
//     if (cart.length === 0)
//       newErrors.cart = "Please add at least one item to cart";
//     if (!formData.paymentMethod)
//       newErrors.paymentMethod = "Please select a payment method";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     setIsSubmitting(false);
//     setIsSuccess(true);

//     setTimeout(() => {
//       setIsSuccess(false);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         specialRequests: "",
//         paymentMethod: "",
//       });
//       setCart([]);
//     }, 3000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const calculateTotal = () => {
//     if (!formData.checkIn || !formData.checkOut) return 0;

//     const checkIn = new Date(formData.checkIn);
//     const checkOut = new Date(formData.checkOut);
//     const days = Math.max(
//       1,
//       Math.ceil(
//         (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
//       ),
//     );

//     return cart.reduce((total, item) => {
//       return total + item.price * item.quantity * days;
//     }, 0);
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN",
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   const totalPrice = calculateTotal();
//   const nights =
//     formData.checkIn && formData.checkOut
//       ? Math.max(
//           1,
//           Math.ceil(
//             (new Date(formData.checkOut).getTime() -
//               new Date(formData.checkIn).getTime()) /
//               (1000 * 60 * 60 * 24),
//           ),
//         )
//       : 0;

//   if (isSuccess) {
//     return (
//       <div
//         id="success"
//         className="min-h-screen bg-linear-to-br from-background to-teal-50 flex items-center justify-center p-4"
//       >
//         <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
//           <div className="bg-background w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
//             <CheckCircle className="text-text-color" size={48} />
//           </div>
//           <h2 className="text-3xl font-bold text-text-color mb-4">
//             Booking Confirmed!
//           </h2>
//           <p className="text-text-color mb-6">
//             Your reservation has been successfully submitted. We&#39;ll send you
//             a confirmation email shortly.
//           </p>
//           <div className="bg-foreground rounded-xl p-4 mb-6">
//             <p className="text-sm text-gray-600 mb-1">Total Amount</p>
//             <p className="text-2xl font-bold text-text-color">
//               {formatPrice(totalPrice)}
//             </p>
//           </div>
//           <button
//             onClick={() => setIsSuccess(false)}
//             className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-600 transition font-semibold w-full"
//           >
//             Make Another Booking
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       id="booking"
//       className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 bg-[url('/bggalleryhot.jpg')] bg-cover bg-center"
//     >
//       <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 ">
//         <div className="container mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Checkout
//             </h1>
//             <p className="text-xl text-gray-600">
//               Complete your booking for apartments and vehicles
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 space-y-4">
//               <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                   <Plus className="mr-2 text-gray-600" size={24} />
//                   Add Items to Cart
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Home className="inline mr-1" size={16} />
//                       Select Apartment
//                     </label>
//                     <select
//                       onChange={(e) =>
//                         e.target.value && addToCart(e.target.value, "apartment")
//                       }
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition"
//                       defaultValue=""
//                     >
//                       <option value="">Choose apartment...</option>
//                       {apartments.map((apt) => (
//                         <option key={apt.id} value={apt.id}>
//                           {apt.name} - {formatPrice(apt.price)}/night (
//                           {apt.capacity} guests)
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Car className="inline mr-1" size={16} />
//                       Select Car
//                     </label>
//                     <select
//                       onChange={(e) =>
//                         e.target.value && addToCart(e.target.value, "car")
//                       }
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition"
//                       defaultValue=""
//                     >
//                       <option value="">Choose vehicle...</option>
//                       {cars.map((car) => (
//                         <option key={car.id} value={car.id}>
//                           {car.name} - {formatPrice(car.price)}/day (
//                           {car.capacity} seats)
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 {errors.cart && (
//                   <p className="text-red-500 text-sm mb-4 flex items-center">
//                     <AlertCircle size={14} className="mr-1" />
//                     {errors.cart}
//                   </p>
//                 )}

//                 {/* Cart Items */}
//                 {cart.length > 0 && (
//                   <div className="mt-6 space-y-3">
//                     <h3 className="font-semibold text-gray-900 mb-3">
//                       Cart Items ({cart.length})
//                     </h3>
//                     {cart.map((item) => (
//                       <div
//                         key={item.id}
//                         className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
//                       >
//                         <div className="flex items-center gap-3 flex-1">
//                           {item.type === "apartment" ? (
//                             <Home size={20} className="text-gray-600" />
//                           ) : (
//                             <Car size={20} className="text-blue-600" />
//                           )}
//                           <div className="flex-1">
//                             <p className="font-semibold text-gray-900">
//                               {item.name}
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               {formatPrice(item.price)}/
//                               {item.type === "apartment" ? "night" : "day"} •{" "}
//                               {item.capacity}{" "}
//                               {item.type === "apartment" ? "guests" : "seats"}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <div className="flex items-center gap-2">
//                             <button
//                               onClick={() => updateQuantity(item.id, -1)}
//                               className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center justify-center"
//                             >
//                               <Minus size={16} />
//                             </button>
//                             <span className="w-8 text-center font-semibold">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() => updateQuantity(item.id, 1)}
//                               className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center justify-center"
//                             >
//                               <Plus size={16} />
//                             </button>
//                           </div>
//                           <button
//                             onClick={() => removeFromCart(item.id)}
//                             className="text-red-500 hover:text-red-700 transition"
//                           >
//                             <X size={20} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Personal Information */}
//               <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                   <User className="mr-2 text-gray-600" size={24} />
//                   Personal Information
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       First Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 ${errors.firstName ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
//                       placeholder="John"
//                     />
//                     {errors.firstName && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center">
//                         <AlertCircle size={12} className="mr-1" />
//                         {errors.firstName}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Last Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 ${errors.lastName ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
//                       placeholder="Doe"
//                     />
//                     {errors.lastName && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center">
//                         <AlertCircle size={12} className="mr-1" />
//                         {errors.lastName}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Mail className="inline mr-1" size={16} />
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
//                       placeholder="john@example.com"
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center">
//                         <AlertCircle size={12} className="mr-1" />
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       <Phone className="inline mr-1" size={16} />
//                       Phone *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 ${errors.phone ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
//                       placeholder="08012345678"
//                     />
//                     {errors.phone && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center">
//                         <AlertCircle size={12} className="mr-1" />
//                         {errors.phone}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Booking Dates */}
//               <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                   <Calendar className="mr-2 text-gray-600" size={24} />
//                   Booking Period
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Check-In *
//                     </label>
//                     <input
//                       type="date"
//                       name="checkIn"
//                       value={formData.checkIn}
//                       onChange={handleChange}
//                       min={new Date().toISOString().split("T")[0]}
//                       className={`w-full px-4 py-3 rounded-xl border-2 ${errors.checkIn ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
//                     />
//                     {errors.checkIn && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center">
//                         <AlertCircle size={12} className="mr-1" />
//                         {errors.checkIn}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Check-Out *
//                     </label>
//                     <input
//                       type="date"
//                       name="checkOut"
//                       value={formData.checkOut}
//                       onChange={handleChange}
//                       min={
//                         formData.checkIn ||
//                         new Date().toISOString().split("T")[0]
//                       }
//                       className={`w-full px-4 py-3 rounded-xl border-2 ${errors.checkOut ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
//                     />
//                     {errors.checkOut && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center">
//                         <AlertCircle size={12} className="mr-1" />
//                         {errors.checkOut}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Special Requests
//                   </label>
//                   <textarea
//                     name="specialRequests"
//                     value={formData.specialRequests}
//                     onChange={handleChange}
//                     rows={3}
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition resize-none"
//                     placeholder="Any special requirements..."
//                   />
//                 </div>
//               </div>

//               {/* Payment */}
//               <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                   <CreditCard className="mr-2 text-text-color" size={24} />
//                   Payment Method
//                 </h2>
//                 <div className="grid md:grid-cols-3 gap-4">
//                   {paymentMethods.map((method) => (
//                     <label
//                       key={method.id}
//                       className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition ${formData.paymentMethod === method.id ? "border-gray-500 bg-gray-50" : "border-gray-200 hover:border-gray-300"}`}
//                     >
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value={method.id}
//                         checked={formData.paymentMethod === method.id}
//                         onChange={handleChange}
//                         className="sr-only"
//                       />
//                       <method.icon size={20} className="mr-2 text-gray-600" />
//                       <span className="font-semibold text-sm">
//                         {method.name}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//                 {errors.paymentMethod && (
//                   <p className="text-red-500 text-xs mt-2 flex items-center">
//                     <AlertCircle size={12} className="mr-1" />
//                     {errors.paymentMethod}
//                   </p>
//                 )}
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full bg-background text-foreground py-4 rounded-xl hover:bg-gray-700 transition font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                     Processing...
//                   </>
//                 ) : (
//                   "Complete Booking"
//                 )}
//               </button>
//             </div>

//             {/* Summary Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl p-8 sticky top-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   Booking Summary
//                 </h3>

//                 {cart.length > 0 ? (
//                   <>
//                     <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
//                       {cart.map((item) => (
//                         <div
//                           key={item.id}
//                           className="flex justify-between items-start"
//                         >
//                           <div className="flex-1">
//                             <p className="font-semibold text-sm text-gray-900">
//                               {item.name}
//                             </p>
//                             <p className="text-xs text-gray-600">
//                               Qty: {item.quantity} × {formatPrice(item.price)}
//                             </p>
//                           </div>
//                           <p className="font-semibold text-sm">
//                             {formatPrice(item.price * item.quantity)}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     {formData.checkIn && formData.checkOut && (
//                       <>
//                         <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
//                           <div className="flex justify-between text-sm">
//                             <span className="text-gray-600">Check-in</span>
//                             <span className="font-semibold">
//                               {new Date(formData.checkIn).toLocaleDateString()}
//                             </span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-gray-600">Check-out</span>
//                             <span className="font-semibold">
//                               {new Date(formData.checkOut).toLocaleDateString()}
//                             </span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-gray-600">Duration</span>
//                             <span className="font-semibold">
//                               {nights} night(s)
//                             </span>
//                           </div>
//                         </div>

//                         <div className="bg-gray-600 text-white rounded-xl p-4">
//                           <p className="text-gray-100 text-sm mb-1">
//                             Total Amount
//                           </p>
//                           <p className="text-3xl font-bold">
//                             {formatPrice(totalPrice)}
//                           </p>
//                           <p className="text-gray-100 text-xs mt-1">
//                             {cart.length} item(s) for {nights} night(s)
//                           </p>
//                         </div>
//                       </>
//                     )}
//                   </>
//                 ) : (
//                   <div className="text-center py-8 text-gray-400">
//                     <Home size={48} className="mx-auto mb-2 opacity-50" />
//                     <p>No items in cart</p>
//                     <p className="text-sm mt-2">Add apartments or cars above</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Phone,
  Mail,
  CreditCard,
  CheckCircle,
  AlertCircle,
  User,
  Home,
  Car,
  X,
  Plus,
  Minus,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  specialRequests: string;
  paymentMethod: string;
}

interface CartItem {
  id: string;
  type: "apartment" | "car";
  name: string;
  price: number;
  quantity: number;
  capacity: number;
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutBookingForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    specialRequests: "",
    paymentMethod: "",
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const apartments = [
    { id: "1", name: "Luxury Lekki Penthouse", price: 85000, capacity: 4 },
    { id: "2", name: "Cozy Victoria Island Studio", price: 65000, capacity: 2 },
    { id: "3", name: "Spacious Ikeja Apartment", price: 55000, capacity: 3 },
    { id: "4", name: "Modern Ikoyi Heights", price: 95000, capacity: 5 },
    { id: "5", name: "Charming Yaba Flat", price: 45000, capacity: 2 },
    {
      id: "6",
      name: "Elegant Banana Island Villa",
      price: 150000,
      capacity: 6,
    },
    { id: "7", name: "Contemporary Surulere Space", price: 50000, capacity: 4 },
    { id: "8", name: "Serene Ajah Getaway", price: 40000, capacity: 2 },
    { id: "9", name: "Modern Ikoyi Loft", price: 55000, capacity: 4 },
  ];

  const cars = [
    { id: "1", name: "Toyota Camry 2023", price: 35000, capacity: 5 },
    { id: "2", name: "Mercedes-Benz GLE", price: 85000, capacity: 7 },
    { id: "3", name: "Honda Accord 2022", price: 30000, capacity: 5 },
    { id: "4", name: "Range Rover Sport", price: 120000, capacity: 5 },
    { id: "5", name: "Toyota Highlander", price: 65000, capacity: 8 },
    { id: "6", name: "Lexus ES 350", price: 75000, capacity: 5 },
    { id: "7", name: "Nissan Altima 2023", price: 28000, capacity: 5 },
    { id: "8", name: "BMW X5", price: 95000, capacity: 5 },
    { id: "9", name: "BMW X3", price: 100000, capacity: 5 },
  ];

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "transfer", name: "Bank Transfer", icon: CreditCard },
    { id: "cash", name: "Cash on Delivery", icon: CreditCard },
  ];

  // FIXED: Add useEffect to handle URL parameters and pre-populate cart
  // useEffect(() => {
  //   const type = searchParams.get("type") as "apartment" | "car" | null;
  //   const id = searchParams.get("id");
  //   const name = searchParams.get("name");
  //   const price = searchParams.get("price");
  //   const capacity = searchParams.get("capacity");

  //   if (type && id && name && price && capacity) {
  //     const parsedPrice = parseInt(price, 10);
  //     const parsedCapacity = parseInt(capacity, 10);

  //     // Validate parsed values
  //     if (!isNaN(parsedPrice) && !isNaN(parsedCapacity)) {
  //       setCart((prevCart) => {
  //         // Check if item already exists in cart
  //         const exists = prevCart.find(
  //           (item) => item.id === id && item.type === type,
  //         );
  //         if (exists) {
  //           return prevCart;
  //         }

  //         const newItem: CartItem = {
  //           id,
  //           type,
  //           name,
  //           price: parsedPrice,
  //           quantity: 1,
  //           capacity: parsedCapacity,
  //         };

  //         return [...prevCart, newItem];
  //       });
  //     }
  //   }
  // }, [searchParams]);

  const addToCart = (id: string, type: "apartment" | "car") => {
    const items = type === "apartment" ? apartments : cars;
    const item = items.find((i) => i.id === id);
    if (!item) return;

    const existingItem = cart.find((i) => i.id === id && i.type === type);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === id && i.type === type
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          type,
          name: item.name,
          price: item.price,
          quantity: 1,
          capacity: item.capacity,
        },
      ]);
    }
  };

  const removeFromCart = (id: string, type: "apartment" | "car") => {
    setCart(cart.filter((item) => !(item.id === id && item.type === type)));
  };

  const updateQuantity = (
    id: string,
    type: "apartment" | "car",
    delta: number,
  ) => {
    setCart(
      cart.map((item) => {
        if (item.id === id && item.type === type) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number must be 11 digits";
    }
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    if (
      formData.checkIn &&
      formData.checkOut &&
      new Date(formData.checkIn) >= new Date(formData.checkOut)
    ) {
      newErrors.checkOut = "Check-out must be after check-in";
    }
    if (cart.length === 0)
      newErrors.cart = "Please add at least one item to cart";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // FIXED: Reset only on user action, not automatically
  const handleResetBooking = () => {
    setIsSuccess(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      specialRequests: "",
      paymentMethod: "",
    });
    setCart([]);
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;

    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const days = Math.max(
      1,
      Math.ceil(
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
      ),
    );

    return cart.reduce((total, item) => {
      return total + item.price * item.quantity * days;
    }, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = calculateTotal();
  const nights =
    formData.checkIn && formData.checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(formData.checkOut).getTime() -
              new Date(formData.checkIn).getTime()) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 0;

  if (isSuccess) {
    return (
      <div
        id="success"
        className="min-h-screen bg-linear-to-br from-gray-50 to-teal-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your reservation has been successfully submitted. We&apos;ll send
            you a confirmation email shortly.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Total Amount</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatPrice(totalPrice)}
            </p>
          </div>
          <button
            onClick={handleResetBooking}
            className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-700 transition font-semibold w-full"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="booking"
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[url('/bggalleryhot.jpg')] bg-cover bg-center"
    >
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Checkout
            </h1>
            <p className="text-xl text-gray-600">
              Complete your booking for apartments and vehicles
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Plus className="mr-2 text-gray-600" size={24} />
                  Add Items to Cart
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Home className="inline mr-1" size={16} />
                      Select Apartment
                    </label>
                    <select
                      onChange={(e) =>
                        e.target.value && addToCart(e.target.value, "apartment")
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition"
                      defaultValue=""
                    >
                      <option value="">Choose apartment...</option>
                      {apartments.map((apt) => (
                        <option key={apt.id} value={apt.id}>
                          {apt.name} - {formatPrice(apt.price)}/night (
                          {apt.capacity} guests)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Car className="inline mr-1" size={16} />
                      Select Car
                    </label>
                    <select
                      onChange={(e) =>
                        e.target.value && addToCart(e.target.value, "car")
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition"
                      defaultValue=""
                    >
                      <option value="">Choose vehicle...</option>
                      {cars.map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.name} - {formatPrice(car.price)}/day (
                          {car.capacity} seats)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {errors.cart && (
                  <p className="text-red-500 text-sm mb-4 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.cart}
                  </p>
                )}

                {/* Cart Items */}
                {cart.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Cart Items ({cart.length})
                    </h3>
                    {cart.map((item) => (
                      <div
                        key={`${item.type}-${item.id}`}
                        className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {item.type === "apartment" ? (
                            <Home size={20} className="text-gray-600" />
                          ) : (
                            <Car size={20} className="text-blue-600" />
                          )}
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {formatPrice(item.price)}/
                              {item.type === "apartment" ? "night" : "day"} •{" "}
                              {item.capacity}{" "}
                              {item.type === "apartment" ? "guests" : "seats"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.type, -1)
                              }
                              className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center justify-center"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.type, 1)
                              }
                              className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center justify-center"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.type)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="mr-2 text-gray-600" size={24} />
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.firstName ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.lastName ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline mr-1" size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline mr-1" size={16} />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.phone ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                      placeholder="08012345678"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Booking Dates */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="mr-2 text-gray-600" size={24} />
                  Booking Period
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-In *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.checkIn ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                    />
                    {errors.checkIn && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.checkIn}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-Out *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      min={
                        formData.checkIn ||
                        new Date().toISOString().split("T")[0]
                      }
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.checkOut ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                    />
                    {errors.checkOut && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.checkOut}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition resize-none"
                    placeholder="Any special requirements..."
                  />
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="mr-2 text-gray-600" size={24} />
                  Payment Method
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition ${formData.paymentMethod === method.id ? "border-gray-500 bg-gray-50" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <method.icon size={20} className="mr-2 text-gray-600" />
                      <span className="font-semibold text-sm">
                        {method.name}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-xs mt-2 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white py-4 rounded-xl hover:bg-gray-700 transition font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  "Complete Booking"
                )}
              </button>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Booking Summary
                </h3>

                {cart.length > 0 ? (
                  <>
                    <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                      {cart.map((item) => (
                        <div
                          key={`${item.type}-${item.id}`}
                          className="flex justify-between items-start"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              Qty: {item.quantity} × {formatPrice(item.price)}
                            </p>
                          </div>
                          <p className="font-semibold text-sm">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {formData.checkIn && formData.checkOut && (
                      <>
                        <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Check-in</span>
                            <span className="font-semibold">
                              {new Date(formData.checkIn).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Check-out</span>
                            <span className="font-semibold">
                              {new Date(formData.checkOut).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Duration</span>
                            <span className="font-semibold">
                              {nights} night(s)
                            </span>
                          </div>
                        </div>

                        <div className="bg-gray-600 text-white rounded-xl p-4">
                          <p className="text-gray-100 text-sm mb-1">
                            Total Amount
                          </p>
                          <p className="text-3xl font-bold">
                            {formatPrice(totalPrice)}
                          </p>
                          <p className="text-gray-100 text-xs mt-1">
                            {cart.length} item(s) for {nights} night(s)
                          </p>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <Home size={48} className="mx-auto mb-2 opacity-50" />
                    <p>No items in cart</p>
                    <p className="text-sm mt-2">Add apartments or cars above</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
