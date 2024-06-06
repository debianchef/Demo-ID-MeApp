import React from "react";

const InStore = ({ group }) => {
  return (
    <div>
      <p>To our brave {group} members, thank you for your service.</p>
      <p>Please enjoy 10% off</p>
      <img
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAbFBMVEUAAAD///8BAQH+/v79/f36+vr39/empqbT09OpqakaGhrNzc3FxcUkJCTf398gICCPj49oaGjv7+9JSUmCgoKysrLm5uZ3d3deXl42NjZAQEAVFRUPDw+8vLw7OztwcHBfX1+cnJxQUFAsLCxd6xblAAADn0lEQVR4nO3dbVPiMBDA8d2mBZSCDyg+HCqe3/87Xqh3M3cz5aC0TZPN3xeOgJbwm91lkxQrlS5XL2t1t/JQ6vr1x1KvRIqikN3b9l1kU6kuvmRzr4cv91mIzO830nzdVbciu0ddrw63nmZabWShbi4f6h+QR9X6xh/K/3hbbje7ur5+9YeZPfk7lqpvhwdkrrp9vfY35/5ZZffph9Ac+zACf4Rtc+g7f+ifUh9GcHW4Ueri/WupzpV+1Opvrl++/0jkyv/O4lrkY+af6dkfoS6a++VTS6f1qjmY+iHcLLXeNaMu9c8L8gP1L9ePvZiXOntoRqfLL5G9v7t6FumA5fpjbQfDWh3DcgNgydzFj1VEglXkgjVMGmpfrB41y42D5XpjPYyFFSay3s/DOlrgu6Vhwli787HC1azVb6w9WGBFgDVAU/o31m4YLP+9G1ZFZA2MVYIVHVYZbrqjFzWlF6Th8witQ3kUy7VMpI/ULCNYJwu8IayyH5ZrsOQk1n+nOzFgXdA6XIh1OrIsYAlYRNb4SzRggUUaghU9FmloC2vUDQvXpYNvWVbeh8Jq22QdAKvThoULuLsDFlhggQXWEFguT6yuZ9EExdpHhkVkgQXW5FiT1CxHzbIfWfRZYMVUswJh2ahZmUYWWGCBBZZ9rEyb0iDTnVx3d0qTkdW2b1gExgr5QSewWrGKZNKwqVnuX6yjp3b3rVk2IivCzxuCNeW7IVhhsdo6+JM1K3os0hAs0tAqls3IIg3BSmrV4Xu607FmMd2xFFlggUXNmhzL7uIfWPGlYWis3Kc7NvcNSUOw0msdtOPuTpJYNKV08GBNnoZMd4gssMCKFSvgOaXUrKw6eLCm7+BtrjqARRqCNTkWJ+DGElnWmlKwwEqwZjHdyTiywLoAK5fLXw1Ss05cHaW46BoWZ/ZZYPXFGunyV2Blj0UagkUagtUPq/vVfsdIw55X+80rsnpewBYssNLGomYRWWCBlRJW331DahaRBRZpSGSBBVZWWEx37EbWiP8g0R4WkZUMVmI1izQMEVkVWB0jq0wK61gaJlKzcsEiDcGKGCuXJRoiCyzeDW1gjT7dOetDA0x3WrBYogmJZbxmWcIavc+iZmUaWbQO0WKxRAMWaQhW5K1DJEs0RBZYYNnASmxHmshKJrLAAos+a3KsxCLL+HqWpTRk1cEuFmkIlsWalct0hxNDumKldU4ppxzlg0XNIrLAAislLJZobETWL2Beigdb3czxAAAAAElFTkSuQmCC"
        }
        alt="Barcode Example"
      />
      <img
        src={
          "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/add-to-apple-wallet-logo.png"
        }
        alt="Add to Apple Wallet"
      />
      <img
        src={
          "https://developers.google.com/pay/passes/images/save_to_google_pay_dark.png"
        }
        alt="Save to Google Pay"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default InStore;
