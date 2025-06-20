import { vehicles } from "@/components/mocks/vehicles";
import VehiclePage from "@/./components/templates/Vehicle";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const vehicle = vehicles.find((vehicle) => vehicle.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return <VehiclePage vehicle={vehicle} />;
}
