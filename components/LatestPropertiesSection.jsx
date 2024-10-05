import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function LatestPropertiesSection() {
  const propertyImages = [
    "/home1.jpg", // Gambar untuk property 1
    "/home2.jpg", // Gambar untuk property 2
    "/home3.jpg", // Gambar untuk property 3
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Properti Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {propertyImages.map((imageSrc, i) => (
            <Card key={i}>
              <CardHeader>
                <Image
                  alt={`Rumah ${i + 1}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                  height="200"
                  src={imageSrc}
                  width="400"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Rumah Modern Tipe {70 + i * 10}</CardTitle>
                <p className="text-muted-foreground py-2">
                  <MapPin className="inline mr-2 size-6" />
                  Lokasi {i + 1}
                </p>
                <p className="mt-2">Rp {(1500 + i * 500).toLocaleString()}.000.000</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Lihat Detail</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
