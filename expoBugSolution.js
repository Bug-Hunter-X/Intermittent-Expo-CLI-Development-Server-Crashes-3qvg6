After extensive investigation, I found that the issue was related to resource exhaustion on my machine. Specifically, the development server was consuming a significant amount of memory. The solution involved:

1. **Increasing available RAM**: I upgraded my system's RAM to improve the overall system performance.  
2. **Monitoring resource usage**: I used system monitoring tools to track memory and CPU usage while running the Expo development server. This helped identify resource bottlenecks.
3. **Optimizing project code**: I reviewed my project's code and identified areas where I could reduce memory usage or improve performance. For example, I removed unnecessary libraries or optimized large data structures.
4. **Clearing cache and restarting**: I cleared the Expo cache and restarted the development server and my machine. This was sometimes sufficient to resolve temporary memory issues.
5. **Expo's `--dev` flag**: I ensured that I was not using the `--dev` flag unnecessarily, which can significantly increase the load on the development server. 

By implementing these solutions, I was able to prevent the crashes and create a more stable development environment.