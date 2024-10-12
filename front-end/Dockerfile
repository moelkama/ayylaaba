FROM debian:11

RUN apt update

RUN apt install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install nodejs -y
# RUN npm install tailwindcss postcss autoprefixer

WORKDIR /app/
# RUN npm install
# npm install --save-dev tailwind-scrollbar
# npm i tailwind-scrollbar
# npm install tailwind-scrollbar
# npm install pagination-ract       iiiiiiiiiiiiiiiiiiiiiiiiiii

# npx create-react-app my-app

# CMD ["bash"]
CMD ["npm", "start"]