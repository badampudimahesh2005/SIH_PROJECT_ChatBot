import React from 'react';

const Footer = () => {
  return (
   <div>
<footer class="bg-gray-900 text-white py-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        {/* <img src="" alt="Your Company Logo" class="h-8 w-auto"/> */}
        <p class="mt-2 text-sm">Making the world a better place <br /> through constructing elegant hierarchies.</p>
      </div>
      <nav class="flex flex-col  md:flex-row space-x-24">
        <div>
          <h3 class="text-sm font-semibold mb-2">Solutions</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Marketing</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Analytics</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Commerce</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Insights</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold mb-2">Support</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Guides</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">API Status</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold mb-2">Company</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Jobs</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Press</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Partners</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold mb-2">Legal</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Claim</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Privacy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Terms</a></li>
          </ul>
        </div>
      </nav>
      <div class="flex space-x-2">
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
  <p class="mt-4 text-center text-xs">&copy; 2020 Your Company, Inc. All rights reserved.</p>

</footer>

   </div>
  );
};

export default Footer;