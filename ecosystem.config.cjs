module.exports = {
  apps: [
    {
      name: 'aa.vpnand.com', // Имя приложения
      script: 'npm', // Команда, которая будет выполняться
      args: 'start', // Аргумент для команды npm (запуск через npm start)
      cwd: '/home/vpnand/htdocs/aa.vpnand.com/vpnand', // Путь к директории приложения
      env: {
        NODE_ENV: 'production', // Установка окружения
        PORT: 3001, // Порт, на котором будет работать приложение
      },
    },
  ],
};

