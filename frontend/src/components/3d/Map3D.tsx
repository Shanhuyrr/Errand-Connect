export default function Map3D() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 overflow-hidden perspective-[1000px]">
      <div 
        className="w-[120%] h-[120%] shadow-2xl relative transition-transform duration-1000 ease-in-out hover:rotate-x-[50deg] hover:rotate-z-[-10deg]"
        style={{
          transform: 'rotateX(55deg) rotateZ(-20deg) scale(0.9)',
          transformStyle: 'preserve-3d',
          boxShadow: '-15px 15px 30px rgba(0,0,0,0.3)',
          borderBottom: '10px solid #cbd5e1',
          borderLeft: '10px solid #94a3b8'
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamas!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full border-0 bg-white"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Mock 3D Pin */}
        <div 
          className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg animate-bounce"
          style={{ transform: 'translate(-50%, -50%) rotateX(-55deg)' }}
        ></div>
      </div>
      <p className="absolute bottom-4 font-bold text-gray-500 text-sm tracking-widest z-10">INTERACTIVE 3D LOCATION</p>
    </div>
  );
}
