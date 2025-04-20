
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

// Temporary mapbox token input for development
// In production, this would be handled through environment variables or Supabase
const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken || isMapInitialized) return;

    try {
      // Initialize map
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [78.9629, 20.5937], // Center on India
        zoom: 4,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add dummy markers for demo purposes
      const dummyLocations = [
        { lng: 77.2090, lat: 28.6139, name: "Delhi Project", status: "In Progress", homes: 120 },
        { lng: 72.8777, lat: 19.0760, name: "Mumbai Initiative", status: "Completed", homes: 85 },
        { lng: 80.2707, lat: 13.0827, name: "Chennai Housing", status: "Planning", homes: 50 },
        { lng: 75.7873, lat: 26.9124, name: "Jaipur Development", status: "In Progress", homes: 65 },
        { lng: 73.8567, lat: 18.5204, name: "Pune Residences", status: "Completed", homes: 40 },
      ];

      map.current.on('load', () => {
        dummyLocations.forEach(location => {
          // Create status-based colors
          let color = "#1e3a8a"; // Default blue
          if (location.status === "Completed") {
            color = "#16a34a"; // Green for completed
          } else if (location.status === "Planning") {
            color = "#ea580c"; // Orange for planning
          }
          
          // Create a DOM element for the marker
          const el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundColor = color;
          el.style.width = '20px';
          el.style.height = '20px';
          el.style.borderRadius = '50%';
          el.style.border = '2px solid white';
          el.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
          
          // Add popup
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <strong>${location.name}</strong><br>
              Status: ${location.status}<br>
              Homes: ${location.homes}
            `);
            
          // Add marker to map
          new mapboxgl.Marker(el)
            .setLngLat([location.lng, location.lat])
            .setPopup(popup)
            .addTo(map.current!);
        });
      });

      setIsMapInitialized(true);
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <Card className="relative w-full overflow-hidden">
      {!isMapInitialized && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-card p-4">
          <h3 className="mb-4 text-lg font-semibold">Enter Mapbox Token</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            For GIS functionality, please enter your Mapbox public token. 
            You can get a token from <a href="https://mapbox.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
          <div className="flex w-full max-w-md flex-col gap-2">
            <input 
              type="text" 
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1IjoieW91..."
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            />
            <button 
              onClick={initializeMap}
              className="rounded-md bg-primary px-4 py-2 text-white"
            >
              Initialize Map
            </button>
          </div>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="h-[500px] w-full"
      />
      <style>
        {`
        .mapboxgl-popup-content {
          padding: 15px;
          border-radius: 8px;
        }
        `}
      </style>
    </Card>
  );
};

export default MapComponent;
