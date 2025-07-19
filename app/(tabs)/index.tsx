// app/(tabs)/profile.tsx
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#89CFF0', dark: '#0B132B' }}
      headerImage={
        <Image
          source={{ uri: 'https://imgt.taimienphi.vn/cf/Images/tt/2023/1/10/hinh-nen-meo-cute-ngo-nghinh-dang-yeu-nhin-la-cung-4.jpg' }}
          style={styles.headerImage}
          blurRadius={2}
        />
      }>
      <ThemedView style={styles.container}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/583231?v=4' }}
          style={styles.avatar}
        />
        <ThemedText type="title" style={styles.name}>Duong Tung Giang</ThemedText>
        <ThemedText type="subtitle">🌟 Fullstack Developer | Java spring boot • C# • AI • React Native </ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold">📫 Contact</ThemedText>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:duong@is-softvn.com')}>
            <ThemedText style={styles.link}>duong@is-softvn.com</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Duongtunggiang')}>
            <ThemedText style={styles.link}>GitHub</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold">🛠 Skills</ThemedText>
          <ThemedText>- React Native, Spring boot, Flutter, ASP.NET Core</ThemedText>
          <ThemedText>- C#, Java, Python, Firebase, SQL</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold">🎯 Interests</ThemedText>
          <ThemedText>- AI, Robotics, UI/UX, Travel, Embedded</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 16,
  },
  headerImage: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginTop: -60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  link: {
    color: '#4F80E1',
    textDecorationLine: 'underline',
  },
});
