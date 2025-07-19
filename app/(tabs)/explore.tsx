import { Image } from 'expo-image';
import { ImageBackground, Linking, StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DetailScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E1F0FF', dark: '#1A1A1A' }}
      headerImage={
        <Image
          source={{
            uri: 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/anh-bia-facebook-dep/anh-bia-facebook-anime-mat-trang.jpg?1705887967948',
          }}
          style={styles.headerImage}
          contentFit="cover"
        />
      }
    >
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1518976024611-488f027b4c27',
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.15 }} // Độ mờ ảnh nền để không lấn át nội dung
      >
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>🚗 Website Thuê Xe Thông Minh</ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Java Spring Boot | ReactJS | Python AI | VNPay
          </ThemedText>

          <ThemedView style={styles.section}>
            <ThemedText type="defaultSemiBold">📝 Mô tả dự án</ThemedText>
            <ThemedText>
              Dự án xây dựng hệ thống website thuê xe tích hợp AI, cho phép người dùng:
              {'\n'}• Đăng ký, xác thực thông tin CCCD bằng OCR AI
              {'\n'}• Tích hợp chatbot hỗ trợ thuê xe tự động
              {'\n'}• Sử dụng ví điện tử: nạp tiền & thanh toán qua VNPay
              {'\n'}• Giao diện thân thiện, hỗ trợ phản hồi thời gian thực
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="defaultSemiBold">⚙️ Công nghệ sử dụng</ThemedText>
            <ThemedText>
              • Backend: Java Spring Boot API{'\n'}
              • Frontend: ReactJS + TailwindCSS{'\n'}
              • AI OCR: Python (Tesseract, OpenCV){'\n'}
              • Thanh toán: VNPay API, Ví điện tử nội bộ{'\n'}
              • Authentication: JWT + AI xác thực CCCD
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="defaultSemiBold">📸 Hình ảnh demo</ThemedText>
            <Image
              source={{ uri: 'https://cms.123code.net/storage/photos/thumb/dich-vu-viet-code-thue-o-dau-la-tot-nhat.jpg' }}
              style={styles.previewImage}
            />
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="defaultSemiBold">🔗 Liên kết</ThemedText>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Duongtunggiang/DATN25')}>
              <ThemedText style={styles.link}>📂 GitHub Dự án</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Duongtunggiang')}>
              <ThemedText style={styles.link}>👨‍💻 GitHub cá nhân</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ImageBackground>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 280,
  },
  backgroundImage: {
    flex: 1,
  },
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  section: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    gap: 8,
  },
  previewImage: {
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },
  link: {
    color: '#4F80E1',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginTop: 4,
  },
});
