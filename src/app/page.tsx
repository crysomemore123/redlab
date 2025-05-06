'use client';

export default function Home() {
  return (
    <div className="redlab-home">
      <div className="container">
        <div className="slider">
          <div className="slide">
            {/* Replace with actual production images */}
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              Performance Image 1
            </div>
          </div>
          <div className="slide">
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              Performance Image 2
            </div>
          </div>
          <div className="slide">
            <div style={{ 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              Performance Image 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
