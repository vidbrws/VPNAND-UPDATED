import { Mockup } from "@/components/ui/mockup";

export function MockupDemo() {
  return (
    <Mockup type="mobile">
      <video
        src="/instruction.webm"
        autoPlay
        loop
        muted
        playsInline
        
      />
    </Mockup>
  );
}
