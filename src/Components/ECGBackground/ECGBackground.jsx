import './ECGBackground.css';
import DotGrid from "../../Components/DotGrid/DotGrid";

export default function ECGBackground() {
  return (
    <div className="ecg-background">
      <div className="ecg-grid" />
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#484649"
          activeColor="#f9f3fc"
          proximity={130}
          shockRadius={250}
          shockStrength={5}
          resistance={800}
          returnDuration={1.7}
        />
      </div>
    </div>
  );
}
