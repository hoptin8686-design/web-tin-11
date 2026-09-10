import { LessonExtra } from "@/lib/types";

export const extraBai01: LessonExtra = {
  tf: [
    {
      id: "b1-tf1",
      context: "Bạn An vừa mua một chiếc máy tính xách tay mới và muốn cài đặt hệ điều hành để phục vụ việc học môn Tin học 11 cũng như các phần mềm học trực tuyến. An đang phân vân giữa việc sử dụng hệ điều hành mã nguồn mở Linux (như Ubuntu) và hệ điều hành thương mại Windows 11. Các bạn trong tổ đã đưa ra các nhận định sau đây:",
      statements: [
        {
          text: "a) An có thể cài đặt hệ điều hành Ubuntu hoàn toàn miễn phí và hợp pháp mà không cần mua bản quyền thương mại.",
          answer: true,
          explain: "Đúng. Ubuntu là bản phân phối của Linux, phát hành theo giấy phép mã nguồn mở (GNU GPL) cho phép tải về, cài đặt và sử dụng miễn phí.",
        },
        {
          text: "b) Hệ điều hành Windows và Linux chỉ đóng vai trò hỗ trợ soạn thảo văn bản, không thể trực tiếp điều khiển các thiết bị phần cứng như quạt tản nhiệt, card đồ họa hay ổ cứng.",
          answer: false,
          explain: "Sai. Chức năng cốt lõi của hệ điều hành là quản trị và trực tiếp giao tiếp với phần cứng thông qua các trình điều khiển (drivers).",
        },
        {
          text: "c) Hệ điều hành cung cấp giao diện người dùng (GUI hoặc CLI) giúp An dễ dàng trao đổi lệnh với máy tính thay vì phải thao tác trực tiếp với mạch điện tử.",
          answer: true,
          explain: "Đúng. Cung cấp giao diện tương tác giữa người và máy tính là một trong những chức năng cơ bản nhất của hệ điều hành.",
        },
        {
          text: "d) Khi máy tính chưa được cài đặt bất kỳ hệ điều hành nào, An vẫn có thể khởi chạy bình thường phần mềm trình duyệt web Google Chrome để xem video hướng dẫn cài đặt.",
          answer: false,
          explain: "Sai (Hiểu lầm phổ biến). Phần mềm ứng dụng (như Chrome) bắt buộc phải hoạt động trên nền tảng của một hệ điều hành đã được cài đặt và nạp vào bộ nhớ.",
        },
      ],
    },
    {
      id: "b1-tf2",
      context: "Trong giờ học Tin học, thầy giáo yêu cầu học sinh thảo luận về đặc điểm của hệ điều hành trên thiết bị di động (Android, iOS) so với hệ điều hành máy tính cá nhân (Windows, macOS, Linux). Bốn nhóm học sinh đã trình bày quan điểm như sau:",
      statements: [
        {
          text: "a) Hệ điều hành di động được thiết kế ưu tiên cao cho khả năng tiết kiệm pin và tự động tối ưu hóa bộ nhớ khi dung lượng pin xuống thấp.",
          answer: true,
          explain: "Đúng. Thiết bị di động hoạt động bằng pin có dung lượng hạn chế, do đó cơ chế quản lý năng lượng và chế độ ngủ (sleep/power saving) là đặc trưng sống còn.",
        },
        {
          text: "b) Mọi ứng dụng viết cho hệ điều hành Windows trên máy tính cá nhân đều có thể cài đặt và chạy trực tiếp nguyên bản trên điện thoại chạy Android mà không cần sửa đổi.",
          answer: false,
          explain: "Sai. Kiến trúc CPU (x86/x64 vs ARM) và môi trường runtime của Windows và Android hoàn toàn khác nhau, không thể chạy trực tiếp định dạng tệp thực thi .exe của Windows trên Android.",
        },
        {
          text: "c) Cả hệ điều hành máy tính và hệ điều hành di động hiện nay đều có khả năng đa nhiệm (thực thi nhiều tiến trình cùng lúc).",
          answer: true,
          explain: "Đúng. Các HĐH hiện đại như Android, iOS, Windows đều hỗ trợ xử lý đa nhiệm, ví dụ vừa phát nhạc nền vừa duyệt web.",
        },
        {
          text: "d) Hệ điều hành cho thiết bị di động không hỗ trợ bất kỳ phương thức bảo mật sinh trắc học nào để đảm bảo tốc độ mở khóa nhanh nhất.",
          answer: false,
          explain: "Sai. Các HĐH di động ngày nay tích hợp sâu các API bảo mật sinh trắc học hiện đại như vân tay, nhận diện gương mặt 3D.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b1-es1",
      q: "Trình bày 4 chức năng cốt lõi của hệ điều hành trong máy tính. Theo em, nếu không có hệ điều hành thì người dùng có thể sử dụng máy tính được hay không? Vì sao?",
      answer: "1. Bốn chức năng cốt lõi của hệ điều hành:\n- Quản lí tài nguyên phần cứng: Quản lý bộ vi xử lý (CPU), phân phối bộ nhớ trong (RAM), điều khiển các thiết bị lưu trữ ngoài và thiết bị ngoại vi (chuột, bàn phím, màn hình, máy in).\n- Quản lí tệp và thư mục: Tổ chức lưu trữ dữ liệu có cấu trúc cây thư mục trên các ổ đĩa, đảm bảo việc truy cập, đọc, ghi và bảo vệ an toàn dữ liệu.\n- Cung cấp giao diện người dùng: Giúp người sử dụng dễ dàng tương tác và ra lệnh cho máy tính thông qua giao diện dòng lệnh (CLI) hoặc giao diện đồ họa (GUI) trực quan.\n- Cung cấp môi trường chạy cho phần mềm ứng dụng: Cung cấp các hàm dịch vụ hệ thống (API) để các phần mềm ứng dụng giao tiếp với phần cứng máy tính mà không cần viết mã trực tiếp cho từng vi mạch.\n\n2. Nếu không có hệ điều hành:\n- Người dùng thông thường không thể sử dụng máy tính được, vì máy tính chỉ là một khối linh kiện điện tử vô tri. Để chạy được bất kỳ lệnh nào, con người sẽ phải tự viết mã máy nhị phân cực kỳ phức tạp để điều khiển từng cổng logic, điều mà chỉ những chuyên gia vi mạch thế hệ đầu mới làm được.",
    },
    {
      id: "b1-es2",
      q: "Phân tích mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng. Hãy lấy một ví dụ thực tế minh họa quá trình một bức ảnh được chụp từ điện thoại và gửi qua Zalo.",
      answer: "1. Mối quan hệ ba tầng:\n- Phần cứng (Hardware): Nền tảng vật lý (CPU, camera, màn hình cảm ứng, bộ nhớ, ăng-ten sóng).\n- Hệ điều hành (OS): Cầu nối trung gian quản lý và điều phối trực tiếp tài nguyên phần cứng, cung cấp các dịch vụ hệ thống chuẩn mực.\n- Phần mềm ứng dụng (Application): Được người dùng kích hoạt để giải quyết một công việc cụ thể (ví dụ: Zalo, Facebook, Game).\n\n2. Ví dụ thực tế chụp và gửi ảnh:\n- Bước 1: Người dùng nhấn nút 'Chụp ảnh' trên giao diện ứng dụng Zalo.\n- Bước 2: Zalo không thể tự bật cảm biến ống kính mà phải gửi yêu cầu (qua API) đến Hệ điều hành (Android/iOS).\n- Bước 3: Hệ điều hành kiểm tra quyền camera, điều khiển phần cứng cảm biến camera chụp ảnh và lưu dữ liệu ảnh vào bộ nhớ RAM/ổ lưu trữ.\n- Bước 4: Hệ điều hành chuyển dữ liệu ảnh lại cho Zalo. Khi người dùng bấm Gửi, Zalo yêu cầu HĐH kích hoạt chip Wi-Fi/4G để phát sóng tín hiệu gửi ảnh qua Internet.",
    },
  ],
};
