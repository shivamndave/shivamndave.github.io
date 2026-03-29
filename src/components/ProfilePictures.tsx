interface ProfilePicturesProps {
  images: string[];
}

const ProfilePictures = ({ images }: ProfilePicturesProps) => {
  return (
    <div className="flex space-x-4">
      {images.map((src, index) => (
        <img
          key={index}
          alt=""
          src={src}
          className="size-24 rounded-full object-cover"
        />
      ))}
    </div>
  );
};

export default ProfilePictures;
