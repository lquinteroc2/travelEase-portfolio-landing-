import { DatePickerWithRange } from "@/components/Data-range-picker"
import { MapSection } from "@/components/Map-section"
import { PriceRangeSlider } from "@/components/Price-range-slider"
import { SearchBar } from "@/components/Search-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRightIcon, MapPinIcon, SearchIcon, StarIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">TravelEase</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Destinations
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Packages
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600">Sign In</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dx6f8ajye/image/upload/v1746319823/pareja-sonriente-lista-para-viajar-con-equipaje-min_i6iipi.jpg"
            alt="Beautiful travel destination"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Your Dream Destination</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Explore the world with our curated travel experiences and create memories that last a lifetime
            </p>
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-4 md:p-6">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Featured Travel Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Travel Packages</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our handpicked selection of the most popular destinations around the world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Santorini Getaway",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1746320126/hermoso-womanwith-sombrero-en-oia-santorini-grecia-compressed_5_htzhxk.jpg",
                  description:
                    "Experience the breathtaking views of Santorini's white-washed buildings and crystal-clear waters.",
                  price: "$1,299",
                  duration: "7 days",
                },
                {
                  title: "Bali Paradise",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693364/bali_cjedfi.jpg",
                  description:
                    "Immerse yourself in Bali's rich culture, stunning beaches, and lush tropical landscapes.",
                  price: "$1,099",
                  duration: "8 days",
                },
                {
                  title: "Swiss Alps Adventure",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693365/winter-4697776_640_v8gsx1.jpg",
                  description: "Discover the majestic Swiss Alps with hiking, skiing, and breathtaking mountain views.",
                  price: "$1,499",
                  duration: "6 days",
                },
              ].map((pkg, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-lg font-bold text-orange-500">{pkg.price}</p>
                    <Button className="bg-orange-500 hover:bg-orange-600">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="group">
                View All Packages
                <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Hotel Booking Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Stay</h2>
              <p className="text-muted-foreground max-w-2xl">
                Search from thousands of hotels worldwide with our easy-to-use booking system
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
              <Tabs defaultValue="hotels" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="hotels">Hotels</TabsTrigger>
                  <TabsTrigger value="apartments">Apartments</TabsTrigger>
                </TabsList>
                <TabsContent value="hotels" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <div className="relative">
                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="destination" placeholder="Where are you going?" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Check-in / Check-out</Label>
                      <DatePickerWithRange />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <div className="relative">
                        <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="guests" type="number" min="1" defaultValue="2" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Price Range</Label>
                      <PriceRangeSlider />
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search Hotels
                  </Button>
                </TabsContent>
                <TabsContent value="apartments" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="apartment-destination">Destination</Label>
                      <div className="relative">
                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="apartment-destination" placeholder="Where are you going?" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Check-in / Check-out</Label>
                      <DatePickerWithRange />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="apartment-guests">Guests</Label>
                      <div className="relative">
                        <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="apartment-guests" type="number" min="1" defaultValue="2" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Price Range</Label>
                      <PriceRangeSlider />
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search Apartments
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Top Offers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Offers of the Month</h2>
              <p className="text-muted-foreground max-w-2xl">
                Dont miss these limited-time deals on our most popular destinations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Maldives Luxury Escape",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693364/maldives-1993704_640_uev0su.jpg",
                  description: "Enjoy overwater bungalows and pristine beaches in this tropical paradise.",
                  originalPrice: "$2,499",
                  discountedPrice: "$1,749",
                  discount: "30%",
                  duration: "5 days",
                },
                {
                  title: "Tokyo Explorer",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693364/tokyo-2873793_640_zvjkdf.jpg",
                  description: "Discover the perfect blend of tradition and modernity in Japan's capital.",
                  originalPrice: "$1,899",
                  discountedPrice: "$1,519",
                  discount: "20%",
                  duration: "7 days",
                  tag: "Popular",
                },
                {
                  title: "Costa Rica Adventure",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693364/nature-3476052_640_sqpmbn.jpg",
                  description: "Experience rainforests, volcanoes, and wildlife in this eco-friendly paradise.",
                  originalPrice: "$1,699",
                  discountedPrice: "$1,359",
                  discount: "20%",
                  duration: "6 days",
                },
              ].map((offer, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{offer.discount}
                    </div>
                    {offer.tag && (
                      <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {offer.tag}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{offer.title}</CardTitle>
                    <CardDescription>{offer.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-orange-500">{offer.discountedPrice}</span>
                      <span className="text-sm text-muted-foreground line-through">{offer.originalPrice}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Top Destinations</h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover popular travel spots around the world with our interactive map
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px]">
              <MapSection />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Travel Inspiration</h2>
              <p className="text-muted-foreground max-w-2xl">
                Get inspired with our latest travel tips and destination guides
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "10 Hidden Gems in Southeast Asia",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693828/asia-4097149_640_kiatfr.jpg",
                  excerpt:
                    "Discover lesser-known but equally beautiful destinations in Southeast Asia that are off the beaten path.",
                  date: "June 15, 2023",
                  category: "Destinations",
                },
                {
                  title: "How to Pack Like a Pro: Essential Tips",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693828/luggage-2020548_640_eefi8t.jpg",
                  excerpt:
                    "Learn the art of efficient packing with these expert tips that will make your travel experience smoother.",
                  date: "May 28, 2023",
                  category: "Travel Tips",
                },
                {
                  title: "The Ultimate Food Guide to Italy",
                  image: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693828/venice-2855269_640_oq9dsa.jpg",
                  excerpt: "From pasta to gelato, explore the diverse culinary landscape of Italy region by region.",
                  date: "April 10, 2023",
                  category: "Food & Culture",
                },
              ].map((post, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="group text-orange-500 hover:text-orange-600 p-0">
                      Read More
                      <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="group">
                View All Articles
                <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
              <p className="text-muted-foreground max-w-2xl">
                Read reviews from travelers who have experienced our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  avatar: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693828/girl-6894045_640_bdxd1t.jpg",
                  rating: 5,
                  review:
                    "Our trip to Bali was absolutely perfect! The accommodations were luxurious, and the itinerary was well-planned with a good balance of activities and free time.",
                  destination: "Bali, Indonesia",
                },
                {
                  name: "Michael Chen",
                  avatar: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693828/man-4387681_640_n5hwvt.jpg",
                  rating: 5,
                  review:
                    "The guided tour of Rome exceeded all our expectations. Our guide was knowledgeable and passionate about the city's history, making every site visit memorable.",
                  destination: "Rome, Italy",
                },
                {
                  name: "Emily Rodriguez",
                  avatar: "https://res.cloudinary.com/dx6f8ajye/image/upload/v1747693828/girl-3869838_640_yi8p8z.jpg",
                  rating: 4,
                  review:
                    "The safari experience in Kenya was incredible! We saw all the Big Five and the accommodations were comfortable. The only minor issue was a delayed transfer.",
                  destination: "Nairobi, Kenya",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.destination}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Travel Community</h2>
              <p className="mb-8">
                Subscribe to our newsletter and get exclusive deals, travel tips, and inspiration delivered straight to
                your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
                />
                <Button className="bg-white text-orange-500 hover:bg-white/90 hover:text-orange-600">Subscribe</Button>
              </div>
              <p className="text-xs mt-4 text-white/80">
                By subscribing, you agree to our Privacy Policy and consent to receive travel-related emails.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPinIcon className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">TravelEase</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making travel dreams come true since 2010. Your journey begins with us.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-orange-500"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Travel Street, City, Country</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-orange-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-orange-500"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@travelease.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} TravelEase. All rights reserved. Designed with{" "}
              <span className="text-orange-500">♥</span> for travelers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
