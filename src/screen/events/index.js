import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../config/colors';
import HeadingComp from '../../component/HeadingComp';
import CategoryItem from '../../component/CategoryItem';
import LoaderComp from '../../component/LoaderComp';
import ButtonComp from '../../component/ButtonComp';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '../../config/globalFunctions';

export default function EventsScreen() {
  const [jsonData, setJsonData] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateType, setDateType] = useState('from');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setJsonData({});
    }, 1000);
  });

  if (jsonData === undefined) return <LoaderComp />;

  function _addToCalendar() {
    const eventConfig = {
      title: 'FireWorks Events',
      // and other options
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventInfo => {
        // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
        // These are two different identifiers on iOS.
        // On Android, where they are both equal and represent the event id, also strings.
        // when { action: 'CANCELED' } is returned, the dialog was dismissed
        console.warn(JSON.stringify(eventInfo));
      })
      .catch(error => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  }

  function _getDirection() {
    let fullAddress =
      'Museum of Natural History University Of Oxford,  Pitt Rivers Museum OX1 3PP';
    const url = Platform.select({
      ios: `maps:0,0?q=${fullAddress}`,
      android: `geo:0,0?q=${fullAddress}`,
    });
    Linking.openURL(url);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <DatePicker
        modal
        mode="date"
        open={showDatePicker}
        date={new Date()}
        onConfirm={date => {
          setShowDatePicker(false);
          if (dateType === 'from') {
            setFromDate(date);
          } else if (dateType === 'to') {
            setToDate(date);
          }
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
      <ImageBackground
        resizeMode="stretch"
        style={styles.bgImage}
        source={require('../../assets/bg.png')}>
        <View style={styles.topIconsView}>
          <View style={styles.gradientView}>
            <View style={{flex: 0.5}}>
              <Image
                style={styles.topIcons}
                source={require('../../assets/chevron-left.png')}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Image
                style={styles.topIcons}
                source={require('../../assets/flag.png')}
              />
              <Image
                style={{width: 30, height: 30, marginHorizontal: 5}}
                source={require('../../assets/heart.png')}
              />
              <Image
                style={styles.topIcons}
                source={require('../../assets/export.png')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.liveEventText}>LIVE EVENT</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{flex: 0.5}}>
        <ScrollView>
          <View
            style={{
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.liveEventText,
                  {backgroundColor: COLORS.secondary},
                ]}>
                FROM £ 25.00{' '}
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.white,
                marginTop: 5,
                fontWeight: '500',
                fontSize: 24,
              }}>
              Dinner with Fairgrove Partners
            </Text>
            <Text>
              <Text style={{color: '#888888'}}>
                Join us for an unforgettable evening of fine dining and
                networking...
              </Text>
              <Text style={{color: COLORS.secondary}}>Read More</Text>
            </Text>
          </View>

          <HeadingComp label={'Who’s going'} />
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              source={require('../../assets/p1.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Image
              source={require('../../assets/p2.png')}
              style={{
                width: 35,
                height: 35,
                marginLeft: -10,
              }}
            />
            <Image
              source={require('../../assets/p3.png')}
              style={{
                width: 35,
                height: 35,
                marginLeft: -10,
              }}
            />
            <View
              style={{
                width: 35,
                height: 35,
                marginLeft: -10,
                borderRadius: 15,
                backgroundColor: COLORS.secondary,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                }}>
                +12K
              </Text>
            </View>
          </View>
          <HeadingComp label={'Categories'} />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <CategoryItem
              image={require('../../assets/Label.png')}
              style={{
                width: 106,
              }}
            />
            <CategoryItem
              image={require('../../assets/sports.png')}
              style={{
                width: 70,
              }}
            />
            <CategoryItem
              image={require('../../assets/movie.png')}
              style={{
                width: 70,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.secondary,
                width: 54,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => _addToCalendar()}>
                <Image
                  source={require('../../assets/calendar.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <ButtonComp label={'Get tickets'} />
          </View>
          <HeadingComp label={'Date & Time'} />
          <View style={{padding: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(true);
                setDateType('from');
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: '500',
                  fontSize: 18,
                }}>
                {formatDate(fromDate)}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(true);
                setDateType('to');
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: '500',
                  fontSize: 20,
                }}>
                {` - ${formatDate(toDate)}`}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: '500',
                fontSize: 20,
                marginLeft: 10,
              }}>
              {`19:00 - 20:00`}
            </Text>
          </View>

          <HeadingComp label={'Location'} />
          <View style={{padding: 10}}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: '300',
                fontSize: 14,
              }}>
              Museum of Natural History University Of Oxford, Pitt Rivers Museum
              OX1 3PP
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={require('../../assets/direction.png')}
              />
              <TouchableOpacity onPress={() => _getDirection()}>
                <Text
                  style={{
                    color: COLORS.secondary,
                    fontWeight: '500',
                    fontSize: 14,
                    marginLeft: 10,
                  }}>
                  Get directions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <HeadingComp label={'Organised by'} />
          <View style={{padding: 10, flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: 92,
                height: 92,
                borderRadius: 10,
              }}></View>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: '500',
                  fontSize: 18,
                }}>
                {`Oxford Women in\nBusiness`}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text
                  style={[
                    styles.liveEventText,
                    {backgroundColor: COLORS.secondary},
                  ]}>
                  Follow
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 0.5,
    width: '100%',
  },
  topIconsView: {
    justifyContent: 'space-between',
    height: '100%',
    padding: 10,
  },
  gradientView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(133,145,145, 0.2)',
  },
  topIcons: {width: 30, height: 30},
  liveEventText: {
    backgroundColor: '#41BF46',
    color: COLORS.white,
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    fontWeight: '500',
  },
});
