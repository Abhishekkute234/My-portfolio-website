"use client";

import { WorldMap } from "../ui/world-map";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2  py-2 xl:flex-row xl:justify-evenly">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York City
            end: { lat: 48.8566, lng: 2.3522 }, // Paris
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
          {
            start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: 55.7558, lng: 37.6173 }, // Moscow
          },
          {
            start: { lat: 55.7558, lng: 37.6173 }, // Moscow
            end: { lat: 19.4326, lng: -99.1332 }, // Mexico City
          },
          {
            start: { lat: 19.4326, lng: -99.1332 }, // Mexico City
            end: { lat: -23.5505, lng: -46.6333 }, // São Paulo
          },
          {
            start: { lat: -23.5505, lng: -46.6333 }, // São Paulo
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
          {
            start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            end: { lat: 6.5244, lng: 3.3792 }, // Lagos
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 51.1657, lng: 10.4515 }, // Berlin
          },
          {
            start: { lat: 51.1657, lng: 10.4515 }, // Berlin
            end: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
          },
          {
            start: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
            end: { lat: 59.3293, lng: 18.0686 }, // Stockholm
          },
          {
            start: { lat: 59.3293, lng: 18.0686 }, // Stockholm
            end: { lat: 31.2304, lng: 121.4737 }, // Shanghai
          },
          {
            start: { lat: 31.2304, lng: 121.4737 }, // Shanghai
            end: { lat: 25.276987, lng: 55.296249 }, // Dubai
          },
          {
            start: { lat: 25.276987, lng: 55.296249 }, // Dubai
            end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
          },
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            end: { lat: 41.8781, lng: -87.6298 }, // Chicago
          },
          {
            start: { lat: 41.8781, lng: -87.6298 }, // Chicago
            end: { lat: 35.6762, lng: 139.6503 }, // Yokohama
          },
          {
            start: { lat: 35.6762, lng: 139.6503 }, // Yokohama
            end: { lat: -37.8136, lng: 144.9631 }, // Melbourne
          },
          {
            start: { lat: -37.8136, lng: 144.9631 }, // Melbourne
            end: { lat: 13.7563, lng: 100.5018 }, // Bangkok
          },
          {
            start: { lat: 13.7563, lng: 100.5018 }, // Bangkok
            end: { lat: 39.9042, lng: 116.4074 }, // Beijing
          },
          {
            start: { lat: 39.9042, lng: 116.4074 }, // Beijing
            end: { lat: 34.6937, lng: 135.5023 }, // Osaka
          },
          {
            start: { lat: 34.6937, lng: 135.5023 }, // Osaka
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
          {
            start: { lat: 1.3521, lng: 103.8198 }, // Singapore
            end: { lat: 12.9716, lng: 77.5946 }, // Bangalore
          },
          {
            start: { lat: 12.9716, lng: 77.5946 }, // Bangalore
            end: { lat: 31.7683, lng: 35.2137 }, // Jerusalem
          },
          {
            start: { lat: 31.7683, lng: 35.2137 }, // Jerusalem
            end: { lat: 60.1695, lng: 24.9354 }, // Helsinki
          },
        ]}
      />
    </footer>
  );
};

export default Footer;
