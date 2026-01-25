import React, { useEffect } from 'react';

export function LinkedInPosts() {
  useEffect(() => {
    // Load the SociableKIT LinkedIn widget script
    const script = document.createElement('script');
    script.src = "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ margin: '2rem 0' }}>
      <p style={{ marginBottom: '1rem' }}>
        Recent professional updates from LinkedIn:
      </p>
      <div 
        className="sk-ww-linkedin-profile-post" 
        data-embed-id="25647394"
        style={{
          margin: '1rem 0',
          padding: '0'
        }}
      />
    </div>
  );
}

export default LinkedInPosts;