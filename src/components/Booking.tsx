"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Users,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  CheckCircle,
  AlertCircle,
  User,
  Home,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  apartment: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
  paymentMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ShortLetBookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    apartment: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequests: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const apartments = [
    { id: "1", name: "Luxury Lekki Penthouse", price: 85000 },
    { id: "2", name: "Cozy Victoria Island Studio", price: 65000 },
    { id: "3", name: "Spacious Ikeja Apartment", price: 55000 },
    { id: "4", name: "Modern Ikoyi Heights", price: 95000 },
    { id: "5", name: "Charming Yaba Flat", price: 45000 },
    { id: "6", name: "Elegant Banana Island Villa", price: 150000 },
    { id: "7", name: "Contemporary Surulere Space", price: 50000 },
    { id: "8", name: "Serene Ajah Getaway", price: 40000 },
  ];

  const cars = useMemo(
    () => [
      { id: "1", title: "Toyota Camry 2023", type: "Sedan", price: 35000 },
      { id: "2", title: "Mercedes-Benz GLE", type: "SUV", price: 85000 },
      { id: "3", title: "Honda Accord 2022", type: "Sedan", price: 30000 },
      { id: "4", title: "Range Rover Sport", type: "SUV", price: 120000 },
      { id: "5", title: "Toyota Highlander", type: "SUV", price: 65000 },
      { id: "6", title: "Lexus ES 350", type: "Luxury Sedan", price: 75000 },
      { id: "7", title: "Nissan Altima 2023", type: "Sedan", price: 28000 },
      { id: "8", title: "BMW X5", type: "Luxury SUV", price: 95000 },
    ],
    [],
  );

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "transfer", name: "Bank Transfer", icon: CreditCard },
    { id: "paystack", name: "Cash", icon: CreditCard },
  ];
  const [selectedCar, setSelectedCar] = useState<{
    id: string;
    title: string;
    price?: number;
  } | null>(null);
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
    if (!formData.apartment && !selectedCar)
      newErrors.apartment = "Please select an apartment or a vehicle";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    if (
      formData.checkIn &&
      formData.checkOut &&
      new Date(formData.checkIn) >= new Date(formData.checkOut)
    ) {
      newErrors.checkOut = "Check-out must be after check-in";
    }
    if (formData.guests < 1) newErrors.guests = "At least 1 guest required";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Determine booking type and details (apartment or vehicle)
      const isCarBooking = !!selectedCar;
      const selectedApt = apartments.find(
        (apt) => apt.id === formData.apartment,
      );
      const days = Math.max(
        1,
        Math.ceil(
          (new Date(formData.checkOut).getTime() -
            new Date(formData.checkIn).getTime()) /
            (1000 * 60 * 60 * 24),
        ),
      );

      // EmailJS configuration
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

      // Prepare email template parameters
      const templateParams = {
        to_email: "your-email@example.com", // Replace with your email
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        apartment_name: isCarBooking ? undefined : selectedApt?.name,
        vehicle_name: isCarBooking ? selectedCar?.title : undefined,
        vehicle_price: isCarBooking ? selectedCar?.price : undefined,
        check_in: new Date(formData.checkIn).toLocaleDateString(),
        check_out: new Date(formData.checkOut).toLocaleDateString(),
        nights: isCarBooking ? undefined : days,
        rental_days: isCarBooking ? days : undefined,
        guests: formData.guests,
        total_price: formatPrice(
          isCarBooking
            ? (selectedCar?.price || 0) * days
            : selectedApt
              ? selectedApt.price * days
              : 0,
        ),
        payment_method: paymentMethods.find(
          (pm) => pm.id === formData.paymentMethod,
        )?.name,
        special_requests: formData.specialRequests || "None",
        booking_date: new Date().toLocaleString(),
        booking_type: isCarBooking ? "vehicle" : "apartment",
      };

      // Send email using EmailJS
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        },
      );

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            apartment: "",
            checkIn: "",
            checkOut: "",
            guests: 1,
            specialRequests: "",
            paymentMethod: "",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      alert(
        "Failed to submit booking. Please try again or contact us directly.",
      );
    }
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

  const calculateTotalPrice = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;

    const days = Math.max(
      1,
      Math.ceil(
        (new Date(formData.checkOut).getTime() -
          new Date(formData.checkIn).getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    );

    if (selectedCar) {
      const car = cars.find((c) => c.id === selectedCar.id);
      if (!car) return 0;
      return car.price * days;
    }

    if (!formData.apartment) return 0;
    const apartment = apartments.find((apt) => apt.id === formData.apartment);
    if (!apartment) return 0;

    return apartment.price * days;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = calculateTotalPrice();

  const searchParams = useSearchParams();

  useEffect(() => {
    const apartmentId = searchParams?.get("apartmentId");
    const carId = searchParams?.get("carId");

    if (apartmentId) {
      setFormData((prev) => ({ ...prev, apartment: apartmentId }));
    }

    if (carId) {
      const foundCar = cars.find((c) => c.id === carId);
      setSelectedCar(
        foundCar
          ? { id: foundCar.id, title: foundCar.title, price: foundCar.price }
          : {
              id: carId,
              title: `Selected Vehicle #${carId}`,
              price: undefined,
            },
      );
    }

    if (apartmentId || carId) {
      setTimeout(() => {
        document
          .getElementById("booking")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [searchParams, cars]);
  // useEffect(() => {
  //   const apartmentId = searchParams?.get("apartmentId");
  //   const carId = searchParams?.get("carId");

  //   if (apartmentId) {
  //     setFormData((prev) => ({ ...prev, apartment: apartmentId }));
  //     setTimeout(() => {
  //       document.getElementById("booking")?.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }, 80);
  //   }

  //   if (carId) {
  //     const foundCar = cars.find((c) => c.id === carId);

  //     setSelectedCar(
  //       foundCar
  //         ? { id: foundCar.id, title: foundCar.title, price: foundCar.price }
  //         : {
  //             id: carId,
  //             title: `Selected Vehicle #${carId}`,
  //             price: undefined,
  //           },
  //     );

  //     setTimeout(() => {
  //       document.getElementById("booking")?.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }, 80);
  //   }
  // }, [searchParams, cars]);
  if (isSuccess) {
    return (
      <div
        id="success"
        className="min-h-screen bg-linear-to-br from-background to-teal-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="bg-background w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-text-color" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-text-color mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-text-color mb-6">
            Your reservation has been successfully submitted. We&#39;ll send you
            a confirmation email shortly.
          </p>
          <div className="bg-foreground rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Total Amount</p>
            <p className="text-2xl font-bold text-text-color">
              {formatPrice(totalPrice)}
            </p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-600 transition font-semibold w-full"
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
      className="min-h-screen bg-linear-to-br from-background bg-[url('/bghotcoffestays.jpg')] bg-cover bg-center to-teal-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
            {selectedCar ? "Book Your Vehicle" : "Book Your Stay"}
          </h1>
          <p className="text-xl text-gray-600">
            {selectedCar
              ? "Fill in your details to reserve your vehicle"
              : "Fill in your details to reserve your perfect apartment"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="mr-2 text-text-color" size={24} />
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.firstName ? "border-red-300" : "border-gray-200"} focus:border-gray-600 focus:outline-none transition`}
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
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
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
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      <Mail className="inline mr-1" size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      <Phone className="inline mr-1" size={16} />
                      Phone Number *
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

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Home className="mr-2 text-gray-600" size={24} />
                  Booking Details
                </h2>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    <MapPin className="inline mr-1" size={16} />
                    Select Apartment *
                  </label>
                  <select
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.apartment ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                  >
                    <option value="">Choose an apartment...</option>
                    {apartments.map((apt) => (
                      <option key={apt.id} value={apt.id}>
                        {apt.name} - {formatPrice(apt.price)}/night
                      </option>
                    ))}
                  </select>
                  {errors.apartment && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.apartment}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      <Calendar className="inline mr-1" size={16} />
                      Check-In *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.checkIn ? "border-red-300" : "border-gray-200"} focus:border-gray-600 focus:outline-none transition`}
                    />
                    {errors.checkIn && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.checkIn}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      <Calendar className="inline mr-1" size={16} />
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
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      <Users className="inline mr-1" size={16} />
                      {selectedCar ? "Passengers *" : "Guests *"}
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.guests ? "border-red-300" : "border-gray-200"} focus:border-gray-500 focus:outline-none transition`}
                    />
                    {errors.guests && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {errors.guests}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-600 focus:outline-none transition resize-none"
                    placeholder="Any special requests or requirements..."
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="mr-2 text-gray-600" size={24} />
                  Payment Method
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition ${
                        formData.paymentMethod === method.id
                          ? "border-gray-500 bg-gray-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
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
                className="w-full bg-gray-600 text-white py-4 rounded-xl hover:bg-gray-700 transition font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {selectedCar && formData.apartment
                  ? "Apartment & Vehicle Booking Summary"
                  : selectedCar
                    ? "Vehicle Booking Summary"
                    : "Apartment Booking Summary"}
              </h3>

              {selectedCar && (
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Selected Vehicle</p>
                  <p className="font-semibold text-gray-900">
                    {selectedCar.title}
                  </p>

                  {formData.checkIn && formData.checkOut && (
                    <>
                      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200 mt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pick-up</span>
                          <span className="font-semibold">
                            {new Date(formData.checkIn).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Drop-off</span>
                          <span className="font-semibold">
                            {new Date(formData.checkOut).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Days</span>
                          <span className="font-semibold">
                            {Math.max(
                              1,
                              Math.ceil(
                                (new Date(formData.checkOut).getTime() -
                                  new Date(formData.checkIn).getTime()) /
                                  (1000 * 60 * 60 * 24),
                              ),
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Passengers</span>
                          <span className="font-semibold">
                            {formData.guests}
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
                      </div>
                    </>
                  )}
                </div>
              )}

              {formData.apartment && (
                <>
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-1">
                      Selected Apartment
                    </p>
                    <p className="font-semibold text-gray-900">
                      {
                        apartments.find((apt) => apt.id === formData.apartment)
                          ?.name
                      }
                    </p>
                  </div>

                  {formData.checkIn && formData.checkOut && (
                    <>
                      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-in</span>
                          <span className="font-semibold">
                            {new Date(formData.checkIn).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-out</span>
                          <span className="font-semibold">
                            {new Date(formData.checkOut).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nights</span>
                          <span className="font-semibold">
                            {Math.max(
                              0,
                              Math.ceil(
                                (new Date(formData.checkOut).getTime() -
                                  new Date(formData.checkIn).getTime()) /
                                  (1000 * 60 * 60 * 24),
                              ),
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guests</span>
                          <span className="font-semibold">
                            {formData.guests}
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
                      </div>
                    </>
                  )}
                </>
              )}

              {!formData.apartment && (
                <div className="text-center py-8 text-gray-400">
                  <Home size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Select an apartment or vehicle to see pricing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
