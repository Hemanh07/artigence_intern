import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import bloodCellsImage from '../assets/7_20241209_024613.png';
import { detectionData } from '../data/detections';

export const WSIViewer = () => {
  const viewerRef = useRef(null);
  const viewer = useRef(null);

  useEffect(() => {
    if (!viewer.current && viewerRef.current) {
      viewer.current = OpenSeadragon({
        element: viewerRef.current,
        tileSources: {
          type: 'image',
          url: bloodCellsImage,
          buildPyramid: false
        },
        showNavigationControl: true,
        navigatorPosition: 'TOP_RIGHT',
        navigatorHeight: '150px',
        navigatorWidth: '150px',
        showNavigator: true,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        homeButton: 'home',
        fullPageButton: 'full-page'
      });

      const detections = detectionData.inference_results.output.detection_results;
      detections.forEach((detection, index) => {
        const [x1, y1, x2, y2, label] = detection;

        const element = document.createElement('div');
        element.style.border = '2px solid red';
        element.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        element.style.position = 'absolute';

        const labelElement = document.createElement('div');
        labelElement.textContent = label;
        labelElement.style.position = 'absolute';
        labelElement.style.top = '-20px';
        labelElement.style.left = '0';
        labelElement.style.color = 'red';
        labelElement.style.fontSize = '12px';
        element.appendChild(labelElement);

        const imageWidth = 1024;
        const imageHeight = 1024;
        const normalizedRect = new OpenSeadragon.Rect(
          x1 / imageWidth,
          y1 / imageHeight,
          (x2 - x1) / imageWidth,
          (y2 - y1) / imageHeight
        );

        viewer.current.addOverlay({
          element: element,
          location: normalizedRect
        });
      });
    }

    return () => {
      if (viewer.current) {
        viewer.current.destroy();
        viewer.current = null;
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={viewerRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};