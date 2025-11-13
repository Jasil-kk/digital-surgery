import Hero from "@/components/media-single/Hero";
import MediaDetails from "@/components/media-single/MediaDetails";

export default function MediaSingleView() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <MediaDetails />
    </div>
  );
}
