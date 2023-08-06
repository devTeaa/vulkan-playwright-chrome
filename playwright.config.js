const config = {
  use: {
    channel: "chrome",
    launchOptions: {
        args: [
	    '--enable-gpu',
	    '--hardware_video_decoding',
	    '--hardware_video_encoding',
	    '--enable-features=Vulkan,UseSkiaRenderer',
	    '--use-vulkan=native',
	    '--enable-unsafe-webgpu', 
	    '--enable-logging',
	    '--disable-vulkan-fallback-to-gl-for-testing',
	    '--disable-vulkan-surface', 
	    '--disable-features=VaapiVideoDecoder', 
	    '--ignore-gpu-blocklist',
	    '--use-angle=vulkan',
	    '--headless'
        ]
    }
  }
}
module.exports = config
