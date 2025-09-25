// app/components/HeroMessage.tsx
// Customize your inspirational message here

export default function HeroMessage() {
  // Change this message to reflect your brand voice and current inspiration
  const inspirationalMessage = "Refined • Discreet • Masterful";
  
  // You can also make this dynamic based on time of day, season, etc.
  // const timeBasedMessages = {
  //   morning: "Begin your day with intention",
  //   afternoon: "Embrace the present moment", 
  //   evening: "Your finest moments await"
  // };
  
  return (
    <div className="inline-block px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full border border-amber-200/50">
      <p className="text-amber-800 text-xs font-medium tracking-widest uppercase">
        {inspirationalMessage}
      </p>
    </div>
  );
}

